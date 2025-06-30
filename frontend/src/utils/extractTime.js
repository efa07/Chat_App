export const extractTime = (dateString) => {
    const date = new Date(dateString)
    const Hours = padZeros(date.getHours())
    const Minutes = padZeros(date.getMinutes())
    return `${Hours}:${Minutes}`
}

const padZeros = (num) => {
    return num.toString().padStart(2,"0")
}