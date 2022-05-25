export default function fetcher(url, data = undefined) {
  const headers = { "Content-Type": "application/json" }
  return fetch(`${process.env.NEXT_WEB_API}/${url}`, {
    method: data ? "POST" : "GET",
    headers: {
      ...headers,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 299 && res.status < 200) {
      throw new Error()
    }
    return res.json()
  })
}
