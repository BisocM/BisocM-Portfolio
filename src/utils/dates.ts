import {IExperience} from "@/data/experience.ts";
import {TFunction} from "i18next";

export const formatExperienceDate = (experience: IExperience, t: TFunction, locale: string = 'en-US'): string => {
    const {startDate, endDate} = experience;
    const start = new Date(startDate);

    const end = endDate ? new Date(endDate) : new Date();

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
    };
    // Use the provided locale for date formatting
    const startDateString = start.toLocaleDateString(locale, options);

    // Use translation for "Present"
    const endDateString = endDate
        ? end.toLocaleDateString(locale, options)
        : t('dates.present');

    if (!endDate && start > end) {
        return `${startDateString} – ${endDateString}`;
    }

    const totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth()) +
        1;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let durationString = "";
    if (years > 0) {
        durationString += `${years} ${t('dates.year', {count: years})} `;
    }
    if (months > 0) {
        durationString += `${months} ${t('dates.month', {count: months})}`;
    }

    if (durationString.trim() === "" && totalMonths > 0) {
        durationString = `1 ${t('dates.month', {count: 1})}`;
    }

    if (durationString.trim()) {
        return `${startDateString} – ${endDateString} · ${durationString.trim()}`;
    }

    return `${startDateString} – ${endDateString}`;
};