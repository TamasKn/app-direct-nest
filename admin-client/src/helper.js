export const addHoursToDate = (hr) => {
    // Adding hours to the current time
    const d = new Date()
    const res = d.setHours(d.getHours() + hr)

    return new Date(res).toString()
}