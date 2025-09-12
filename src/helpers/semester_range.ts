export function getSemesterRange(date: Date = new Date()): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (month <= 6) {
        return `Janeiro - Junho ${year}`
    } else {
        return `Julho - Dezembro ${year}`
    }
}