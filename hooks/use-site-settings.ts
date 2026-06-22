"use client";

import { useEffect, useState } from "react";
import {
  defaultSiteSettings,
  mergeSiteSettings,
  siteSettingsUrl,
  type SiteSettings,
} from "@/lib/site-settings";

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);

  useEffect(() => {
    let ignore = false;

    async function loadSettings() {
      try {
        const response = await fetch(siteSettingsUrl, { cache: "no-store" });

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (!ignore) {
          setSettings(mergeSiteSettings(data));
        }
      } catch {
        // Keep build-time defaults when the CMS/public settings endpoint is not ready.
      }
    }

    loadSettings();

    return () => {
      ignore = true;
    };
  }, []);

  return settings;
}
