// Anything that reaches an href or a src from a remote API goes through here.
// Today both callers read from GitHub and chess.com, which only ever return
// https URLs — but an href that accepts any string also accepts "javascript:",
// and that is one compromised response away from script execution.
export function safeUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url, window.location.origin).protocol === 'https:' ? url : undefined;
  } catch {
    return undefined;
  }
}
