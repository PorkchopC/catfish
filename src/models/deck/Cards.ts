export type { Card }
export { shopCards, buyCard }

type Card = {
    id: number,
    name?: string,
    tension: number,
    experience?: number,
    bait?: number,
    coins?: number,
    cost?: number
}

const buyCard = (card, resources, deck) => {
    if(resources.safe.coins >= card.cost) {
        return deck.cards.unshift(card), shopCards = shopCards.filter(lineCard => lineCard.id !== card.id), resources.safe.coins -= card.cost;
    }
}

let shopCards: Card[] = [
    {  
        id: 17,
        name: "Experience Test",
        tension: 1,
        experience: 2,
        cost: 2
    },
    {
        id: 18,
        name: "Bait Test",
        tension: 0,
        bait: 1,
        cost: 1
    },
    {
        id: 19,
        name: "Coin Test",
        tension: 1,
        coins: 2,
        cost: 2
    }
]