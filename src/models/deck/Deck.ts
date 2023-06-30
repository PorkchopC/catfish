import type { Card } from "./Cards"

export type { Deck }
export {starterDeck, tensionValues, drawFromDeck, moveCardsToDiscard, resetDeck, shuffleDeck, shuffleDiscard}

type Deck = {
drawn: number
cards: Card[]
revealedCards: Card[]
currentCard: Card | undefined
discard: Card[]
totalTension: number
}

let tensionValues: number[] = [ 0, 1, 2, 3 ]

const shuffleDeck = (deck: Deck) => {
    let newDeck: Deck = {
        drawn: 0, 
        cards: deck.cards.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value), 
        revealedCards: deck.revealedCards, 
        currentCard: deck.currentCard, 
        discard: deck.discard, 
        totalTension: deck.totalTension
    };
    return newDeck
};

const shuffleDiscard = (deck: Deck) => {
    deck.drawn = 0;
    deck.cards = [...deck.discard, ...deck.cards].map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    deck.revealedCards = [];
    deck.currentCard = undefined;
    deck.discard = [];
    deck.totalTension = 0;
    return deck;
}

const drawFromDeck = (deck: Deck) => {
    deck.currentCard = deck.cards[deck.drawn];
    deck.revealedCards = [
        ...deck.revealedCards,
        deck.currentCard,
    ];
    deck.totalTension += deck.currentCard.tension;
    deck.drawn += 1;
    return deck
}

const moveCardsToDiscard = (deck: Deck) => {
    deck.discard = [
        ...deck.discard,
        ...deck.revealedCards,
    ];
    deck.cards = deck.cards.filter(
        (card) => !deck.discard.includes(card)
    );
    return deck
}

const resetDeck = (deck: Deck) => {
    deck.totalTension = deck.drawn = 0;
    deck.revealedCards = [];
    deck.currentCard = undefined;
    return deck
}

let starterDeck: Deck = {
    drawn: 0,
    cards: [
        { id: 1, tension: 0 },
        { id: 2, tension: 0 },
        { id: 3, tension: 1, bait: 1 },
        { id: 4, tension: 1, bait: 1 },
        { id: 5, tension: 1, bait: 1 },
        { id: 6, tension: 1, coins: 1 },
        { id: 7, tension: 1, coins: 1 },
        { id: 8, tension: 1, coins: 1 },
        { id: 9, tension: 1, experience: 1 },
        { id: 10, tension: 1, experience: 1 },
        { id: 11, tension: 1, experience: 1 },
        { id: 12, tension: 1, experience: 1 },
        { id: 13, tension: 2, coins: 1, experience: 1 },
        { id: 14, tension: 2, bait: 1, experience: 1 },
        { id: 15, tension: 2, bait: 1, coins: 1 },
        { id: 16, tension: 3, bait: 1, coins: 1, experience: 1 }
    ],
    revealedCards: [],
    currentCard: undefined,
    discard: [],
    totalTension: 0
}