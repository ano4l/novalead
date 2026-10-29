export type SiteEvent = "book_growth_audit" | "open_lawos_demo";

export function trackSiteEvent(event: SiteEvent) {
  const analyticsWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.dataLayer.push({ event });
  window.dispatchEvent(new CustomEvent("novaleads:analytics", { detail: { event } }));
}
