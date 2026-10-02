const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/nikhil.vaxalor@gmail.com'

export async function submitEnquiry(payload) {
  const response = await fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      _subject: `New Workforce Enquiry: ${payload.name} (${payload.organization || 'General'})`,
      _template: 'table',
      _captcha: 'false',
      _replyto: payload.email,
      'Client Name': payload.name,
      'Organization': payload.organization,
      'Phone Number': payload.phone,
      'Email Address': payload.email,
      'Services Required': payload.services || 'Not specified',
      'Requirement Details': payload.requirement,
    }),
  })

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('Unable to send enquiry. Please try again.')
  }

  if (!response.ok || data.success === 'false' || data.success === false) {
    throw new Error(data.message || 'Failed to submit enquiry. Please try again.')
  }

  return { ok: true, data }
}
