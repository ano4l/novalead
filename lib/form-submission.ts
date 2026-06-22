type SubmitConfiguredFormOptions = {
  endpoint: string;
  fallbackEmail: string;
  form: HTMLFormElement;
  storageKey: string;
  subject: string;
};

export type SubmitConfiguredFormResult = "sent" | "needsDestination";

function collectFormPayload(form: HTMLFormElement) {
  const data = new FormData(form);
  const payload: Record<string, string> = {};

  data.forEach((value, key) => {
    payload[key] = String(value);
  });

  return payload;
}

function formatEmailBody(payload: Record<string, string>) {
  return Object.entries(payload)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

export async function submitConfiguredForm({
  endpoint,
  fallbackEmail,
  form,
  storageKey,
  subject,
}: SubmitConfiguredFormOptions): Promise<SubmitConfiguredFormResult> {
  const payload = {
    ...collectFormPayload(form),
    submittedAt: new Date().toISOString(),
  };

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Submission failed with ${response.status}`);
    }

    form.reset();
    return "sent";
  }

  window.localStorage.setItem(storageKey, JSON.stringify(payload));

  if (fallbackEmail) {
    const mailto = new URL(`mailto:${fallbackEmail}`);
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", formatEmailBody(payload));
    window.location.href = mailto.toString();
    form.reset();
    return "sent";
  }

  return "needsDestination";
}
