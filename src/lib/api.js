// Swap this implementation for a real API call (e.g. fetch('/api/enquiry', { method: 'POST', body })) once a backend endpoint exists.
export async function submitEnquiry(payload) {
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { ok: true, payload }
}
