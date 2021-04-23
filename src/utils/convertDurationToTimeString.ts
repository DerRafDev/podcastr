//this is to convert the time in the API from seconds to the correct format

export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / (60 * 60))
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    //this is to convert the number, to the string 00:00:00
    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return timeString;
}