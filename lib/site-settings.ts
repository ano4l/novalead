export type HomepageHeroStat = {
  value: string;
  label: string;
  supportingText: string;
};

export type FooterSettings = {
  clientPortalUrl: string;
  privacyStatement: string;
  referralHref: string;
};

export type LeadCaptureSettings = {
  auditFormEndpoint: string;
  referralFormEndpoint: string;
  auditRecipientEmail: string;
  referralRecipientEmail: string;
};

export type SiteSettings = {
  homepageHeroStat: HomepageHeroStat;
  footer: FooterSettings;
  leadCapture: LeadCaptureSettings;
};

export const defaultSiteSettings: SiteSettings = {
  homepageHeroStat: {
    value: "",
    label: "Confirmed impact metric",
    supportingText:
      "Awaiting Miguel's approved number before this renders on the live homepage.",
  },
  footer: {
    clientPortalUrl: "",
    privacyStatement: "Data-handling statement pending Miguel/legal review.",
    referralHref: "/refer",
  },
  leadCapture: {
    auditFormEndpoint: "",
    referralFormEndpoint: "",
    auditRecipientEmail: "",
    referralRecipientEmail: "",
  },
};

export const siteSettingsUrl =
  process.env.NEXT_PUBLIC_NOVALEADS_SITE_SETTINGS_URL ||
  "/novaleads-site-settings.json";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function readString(
  source: Record<string, unknown> | undefined,
  key: string,
  fallback: string
) {
  const value = source?.[key];
  return typeof value === "string" ? value : fallback;
}

export function mergeSiteSettings(input: unknown): SiteSettings {
  const root = isRecord(input) ? input : {};
  const homepageHeroStat = isRecord(root.homepageHeroStat)
    ? root.homepageHeroStat
    : undefined;
  const footer = isRecord(root.footer) ? root.footer : undefined;
  const leadCapture = isRecord(root.leadCapture) ? root.leadCapture : undefined;

  return {
    homepageHeroStat: {
      value: readString(
        homepageHeroStat,
        "value",
        defaultSiteSettings.homepageHeroStat.value
      ),
      label: readString(
        homepageHeroStat,
        "label",
        defaultSiteSettings.homepageHeroStat.label
      ),
      supportingText: readString(
        homepageHeroStat,
        "supportingText",
        defaultSiteSettings.homepageHeroStat.supportingText
      ),
    },
    footer: {
      clientPortalUrl: readString(
        footer,
        "clientPortalUrl",
        defaultSiteSettings.footer.clientPortalUrl
      ),
      privacyStatement: readString(
        footer,
        "privacyStatement",
        defaultSiteSettings.footer.privacyStatement
      ),
      referralHref: readString(
        footer,
        "referralHref",
        defaultSiteSettings.footer.referralHref
      ),
    },
    leadCapture: {
      auditFormEndpoint: readString(
        leadCapture,
        "auditFormEndpoint",
        defaultSiteSettings.leadCapture.auditFormEndpoint
      ),
      referralFormEndpoint: readString(
        leadCapture,
        "referralFormEndpoint",
        defaultSiteSettings.leadCapture.referralFormEndpoint
      ),
      auditRecipientEmail: readString(
        leadCapture,
        "auditRecipientEmail",
        defaultSiteSettings.leadCapture.auditRecipientEmail
      ),
      referralRecipientEmail: readString(
        leadCapture,
        "referralRecipientEmail",
        defaultSiteSettings.leadCapture.referralRecipientEmail
      ),
    },
  };
}
