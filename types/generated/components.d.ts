import type { Schema, Struct } from '@strapi/strapi';

export interface AboutCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_about_cta_sections';
  info: {
    description: 'About page CTA section';
    displayName: 'About CTA Section';
    icon: 'cursor';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    primaryAction: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryAction: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    description: 'About page hero section';
    displayName: 'About Hero';
    icon: 'layout';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutImpactSection extends Struct.ComponentSchema {
  collectionName: 'components_about_impact_sections';
  info: {
    description: 'Our impact section with stats';
    displayName: 'Impact Section';
    icon: 'chartLine';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutPurposeSection extends Struct.ComponentSchema {
  collectionName: 'components_about_purpose_sections';
  info: {
    description: 'Our purpose section';
    displayName: 'Purpose Section';
    icon: 'target';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_about_values_sections';
  info: {
    description: 'Our values section';
    displayName: 'Values Section';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.value-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareersApplicationSection extends Struct.ComponentSchema {
  collectionName: 'components_careers_application_sections';
  info: {
    description: 'Job application section';
    displayName: 'Application Section';
    icon: 'fileText';
  };
  attributes: {
    description: Schema.Attribute.Text;
    experienceLevels: Schema.Attribute.JSON;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    successDescription: Schema.Attribute.Text;
    successTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareersBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_careers_benefits_sections';
  info: {
    description: 'Why work with us section';
    displayName: 'Benefits Section';
    icon: 'gift';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.value-item', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareersHero extends Struct.ComponentSchema {
  collectionName: 'components_careers_heroes';
  info: {
    description: 'Careers page hero section';
    displayName: 'Careers Hero';
    icon: 'layout';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareersJobPositionSection extends Struct.ComponentSchema {
  collectionName: 'components_careers_job_position_sections';
  info: {
    displayName: 'Job Position Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    job_positions: Schema.Attribute.Relation<
      'oneToMany',
      'api::job-position.job-position'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContactFormConfig extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_configs';
  info: {
    description: 'Contact form configuration';
    displayName: 'Form Config';
    icon: 'mail';
  };
  attributes: {
    description: Schema.Attribute.Text;
    inquiryTypes: Schema.Attribute.JSON;
    successDescription: Schema.Attribute.Text;
    successTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    footerSections: Schema.Attribute.Component<'footer.link-column', true>;
    logo: Schema.Attribute.Media<'images'>;
    siteName: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.social-link', true>;
  };
}

export interface FooterLinkColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_columns';
  info: {
    description: 'Footer link column';
    displayName: 'Link Column';
    icon: 'list';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_sections';
  info: {
    description: 'Homepage call-to-action banner';
    displayName: 'CTA Section';
    icon: 'cursor';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryCta: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryCta: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeExcellenceSection extends Struct.ComponentSchema {
  collectionName: 'components_home_excellence_sections';
  info: {
    description: 'Homepage excellence/about preview section';
    displayName: 'Excellence Section';
    icon: 'trophy';
  };
  attributes: {
    action: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.JSON;
  };
}

export interface HomeFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_items';
  info: {
    description: 'Homepage feature highlight';
    displayName: 'Feature Item';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'home.feature-item', true>;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: 'Homepage hero section';
    displayName: 'Home Hero';
    icon: 'layout';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    primaryCta: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryCta: Schema.Attribute.Component<'shared.cta-button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_insights_sections';
  info: {
    displayName: 'Insights Section';
  };
  attributes: {
    insights: Schema.Attribute.Relation<'oneToMany', 'api::insight.insight'>;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface HomeSectorSection extends Struct.ComponentSchema {
  collectionName: 'components_home_sector_sections';
  info: {
    displayName: 'Sector Section';
  };
  attributes: {
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
    sectors: Schema.Attribute.Relation<'oneToMany', 'api::sector.sector'>;
  };
}

export interface ProjectsHero extends Struct.ComponentSchema {
  collectionName: 'components_projects_heroes';
  info: {
    description: 'Projects page hero section';
    displayName: 'Projects Hero';
    icon: 'layout';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    description: 'Call-to-action button component';
    displayName: 'CTA Button';
    icon: 'cursor';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    variant: Schema.Attribute.Enumeration<
      ['default', 'secondary', 'outline', 'ghost', 'link']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_sections';
  info: {
    description: 'Call-to-action section component';
    displayName: 'CTA Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    primaryAction: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryAction: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['default', 'dark', 'card', 'banner']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    description: 'Navigation or footer link';
    displayName: 'Link Item';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedMenuCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_ctas';
  info: {
    description: 'Call-to-action card for mega menu';
    displayName: 'Menu CTA';
  };
  attributes: {
    body: Schema.Attribute.Text;
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    kicker: Schema.Attribute.String;
    menuType: Schema.Attribute.Enumeration<
      ['projects', 'sectors', 'services', 'about', 'careers']
    > &
      Schema.Attribute.Required;
    secondaryHref: Schema.Attribute.String;
    secondaryLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headers';
  info: {
    description: 'Section header with eyebrow, title, and description';
    displayName: 'Section Header';
    icon: 'heading';
  };
  attributes: {
    action: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Social media link with icon';
    displayName: 'Social Link';
    icon: 'globe';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['linkedin', 'twitter', 'facebook', 'instagram', 'youtube', 'github']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    description: 'Statistics display with value and label';
    displayName: 'Stat Item';
    icon: 'chartLine';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    prefix: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    suffix: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SharedValueItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_value_items';
  info: {
    description: 'Values or features card with icon';
    displayName: 'Value Item';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.cta-section': AboutCtaSection;
      'about.hero': AboutHero;
      'about.impact-section': AboutImpactSection;
      'about.purpose-section': AboutPurposeSection;
      'about.values-section': AboutValuesSection;
      'careers.application-section': CareersApplicationSection;
      'careers.benefits-section': CareersBenefitsSection;
      'careers.hero': CareersHero;
      'careers.job-position-section': CareersJobPositionSection;
      'contact.form-config': ContactFormConfig;
      'footer.footer': FooterFooter;
      'footer.link-column': FooterLinkColumn;
      'home.cta-section': HomeCtaSection;
      'home.excellence-section': HomeExcellenceSection;
      'home.feature-item': HomeFeatureItem;
      'home.feature-section': HomeFeatureSection;
      'home.hero': HomeHero;
      'home.insights-section': HomeInsightsSection;
      'home.sector-section': HomeSectorSection;
      'projects.hero': ProjectsHero;
      'shared.cta-button': SharedCtaButton;
      'shared.cta-section': SharedCtaSection;
      'shared.link-item': SharedLinkItem;
      'shared.menu-cta': SharedMenuCta;
      'shared.section-header': SharedSectionHeader;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.stat-item': SharedStatItem;
      'shared.value-item': SharedValueItem;
    }
  }
}
