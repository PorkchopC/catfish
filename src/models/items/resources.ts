import type { Deck } from "../deck/Deck";

export type { Resources }
export {freshResources, clearLineResources, clearAllResources, updateLineResources, updateSafeResources}

type Resources = {
    line: { bait: number, coins: number, experience: number },
    safe: { bait: number, coins: number, experience: number },
}

const freshResources = () => {
   const newResources = {
        line: { bait: 0, coins: 0, experience: 0 },
        safe: { bait: 0, coins: 0, experience: 0 }
    }
    return newResources
}

const clearLineResources = (resources: Resources) => {
    resources.line.bait =
    resources.line.coins =
    resources.line.experience = 0;
    return resources
}

const clearAllResources = (resources: Resources) => {
    clearLineResources(resources)
    resources.safe.bait =
    resources.safe.coins =
    resources.safe.experience = 0;
    return resources
}

const updateLineResources = (resources: Resources, deck: Deck) => {
    if (deck.currentCard!.bait) resources.line.bait += deck.currentCard!.bait;
    if (deck.currentCard!.coins) resources.line.coins += deck.currentCard!.coins;
    if (deck.currentCard!.experience) resources.line.experience += deck.currentCard!.experience;
    return resources
}

const updateSafeResources = (resources: Resources) => {
    resources.safe = {
        bait: resources.safe.bait + resources.line.bait,
        coins: resources.safe.coins + resources.line.coins,
        experience: resources.safe.experience + resources.line.experience,
    };
    return resources
}