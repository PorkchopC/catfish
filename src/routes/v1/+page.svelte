<script lang="ts">
    const deck: number[] = [1, 1, 1, 2, 3, 1, 2, 1, 1, 1];

    let currentCard: number,
        total: number = 0,
        drawn: number = 0,
        revealedCards: number[] = [];
    // discardPile: number[] = [];
    $: bust = total > 8;

    const shuffle = (cards: number[]) => {
        return cards
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const draw = (selectedDeck: number[]) => {
        if (drawn >= selectedDeck.length || bust) return;
        currentCard = selectedDeck[drawn];
        revealedCards = [...revealedCards, currentCard];
        total += currentCard;
        drawn += 1;
        // discardPile = [...discardPile, currentCard];
    };

    const shuffledDeck: number[] = shuffle(deck);
</script>

<h1>Catfish</h1>

<div>
    <div>Cards Drawn: {drawn} ({revealedCards})</div>
    <div>Cards in Deck: {shuffledDeck}</div>
    <!-- <div>Cards in Discard: {discardPile.length} ({discardPile})</div> -->
    <div>Current Card: {currentCard}</div>
    <div>Bust? {bust}</div>
    <div>Total: {total}</div>
    <button on:click={() => draw(shuffledDeck)} disabled={bust}
        >Draw a card</button
    >
</div>
