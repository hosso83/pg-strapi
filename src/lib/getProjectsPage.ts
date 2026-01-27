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

declare const strapi: any;

export async function getProjectsPage(): Promise<ProjectsPage | null> {
  try {
    const results = await strapi.entityService.findMany('api::projects-page.projects-page', {
      populate: 'deep',
    });

    const entry = Array.isArray(results) ? results[0] : results;
    if (!entry) return null;

    // If the entityService returns { id, attributes } or the raw attributes
    const attrs = entry.attributes ?? entry;
    return attrs as ProjectsPage;
  } catch (err: any) {
    throw new Error(`Failed to load projects page from Strapi: ${err?.message ?? err}`);
  }
}

export default getProjectsPage;
