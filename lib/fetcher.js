export default function fetcher(url, data = undefined) {
  const headers = { "Content-Type": "application/json" }

  return fetch(`https://dhamaradio-backend.herokuapp.com/api/${url}`, {
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
