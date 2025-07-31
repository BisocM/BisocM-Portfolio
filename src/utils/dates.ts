import { IExperience } from "@/data/experience.ts";

export const formatExperienceDate = (experience: IExperience): string => {
    const { startDate, endDate } = experience;
    const start = new Date(startDate);
    // Use the provided end date, or the current date for "Present" jobs
    const end = endDate ? new Date(endDate) : new Date();

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
    };
    const startDateString = start.toLocaleDateString("en-US", options);

    // Display "Present" for ongoing roles, or the formatted end date for completed ones
    const endDateString = endDate
        ? end.toLocaleDateString("en-US", options)
        : "Present";

    // Don't show a duration for roles that haven't started yet
    if (!endDate && start > end) {
        return `${startDateString} – ${endDateString}`;
    }

    // Calculate the duration in years and months
    const totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth()) +
        1;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let durationString = "";
    if (years > 0) {
        durationString += `${years} yr${years > 1 ? "s" : ""} `;
    }
    if (months > 0) {
        durationString += `${months} mo${months > 1 ? "s" : ""}`;
    }

    // Handle cases where the duration is less than a month
    if (durationString.trim() === "" && totalMonths > 0) {
        durationString = "1 mo";
    }

    // If there's a valid duration, append it to the date range
    if (durationString.trim()) {
        return `${startDateString} – ${endDateString} · ${durationString.trim()}`;
    }

    // Otherwise, just show the date range
    return `${startDateString} – ${endDateString}`;
};