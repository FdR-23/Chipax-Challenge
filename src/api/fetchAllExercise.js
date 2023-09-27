import { EpisodeLocation } from "./episodeLocation.js";
import { CharCounter } from "./charCounter.js"

export const AllExercise = async () => {
    const allExercise = await Promise.all([EpisodeLocation(), CharCounter()])
    return allExercise;
}
