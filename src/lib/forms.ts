export const FORM_EN = "https://docs.google.com/forms/d/e/FORM_ID_EN/viewform?embedded=true"; // TODO: replace
export const FORM_KO = "https://docs.google.com/forms/d/e/FORM_ID_KR/viewform?embedded=true"; // TODO: replace

export function isConfigured(url: string) {
  return url.includes("/d/e/") && url.includes("/viewform");
}