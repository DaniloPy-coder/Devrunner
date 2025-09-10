export const calculatePace = (durationMin: number, distanceKm: number): number => {
    if (distanceKm === 0) return 0;
    return durationMin / distanceKm;
};