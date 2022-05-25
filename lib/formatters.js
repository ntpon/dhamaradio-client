import formatDuration from "format-duration"

export const formatDate = (date) => {
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatTime = (timeInSeconds = 0) => {
  return formatDuration(timeInSeconds * 1000)
}
