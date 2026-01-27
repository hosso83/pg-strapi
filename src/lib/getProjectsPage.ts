/* Fetcher for the 'projects-page' single-type from Strapi
   Uses `process.env.STRAPI_URL` or `http://localhost:1337` by default.
   Returns the `attributes` object (or null if not found).
*/
export interface ProjectsPage {
  title?: string;
  description?: string;
  hero?: any;
  cta?: any;
  [key: string]: any;
}

export async function getProjectsPage(): Promise<ProjectsPage | null> {
  const base = process.env.STRAPI_URL || 'http://localhost:1337';
  const url = `${base.replace(/\/$/, '')}/api/projects-page?populate=deep`;

  const res = await fetch(url, { method: 'GET' });
  if (!res.ok) {
    throw new Error(`Failed to fetch projects page: ${res.status} ${res.statusText}`);
  }

  const body = await res.json();
  // Strapi v4 returns { data: { id, attributes: { ... } } }
  const attributes = body?.data?.attributes ?? null;
  return attributes;
}

export default getProjectsPage;
