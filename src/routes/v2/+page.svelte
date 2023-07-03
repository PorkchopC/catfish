<script lang="ts">
    import CardStack from "../../components/CardStack.svelte";
    import Pond from "../../components/Pond.svelte";
    import RulesDrawer from "../../components/RulesDrawer.svelte";
    import TensionMeter from "../../components/TensionMeter.svelte";
    import ResourceDisplay from "../../components/ResourceDisplay.svelte";
    import {
        type Deck,
        starterDeck,
        moveCardsToDiscard,
        drawFromDeck,
        resetDeck,
        shuffleDeck,
        shuffleDiscard,
    } from "../../models/deck/Deck";
    import {
        type Fish,
        type FishList,
        fillPond,
        fishList,
        fishCaught,
        fishEscaped,
        shuffleFish,
    } from "../../models/fish/Fish";
    import { oldRod } from "../../models/items/Items";
    import {
        type Resources,
        updateLineResources,
        updateSafeResources,
        clearAllResources,
        clearLineResources,
        freshResources,
    } from "../../models/items/resources";
    import {
        type Round,
        Phases,
        progressRound,
        freshRound,
        Times,
    } from "../../models/Structure";
    import RoundDisplay from "../../components/RoundDisplay.svelte";
    import ShopIcon from "../../components/icons/ShopIcon.svelte";
    import ShopModal from "../../components/modals/ShopModal.svelte";

    let resources: Resources = freshResources(),
        round: Round = freshRound(),
        selectedFish: Fish | undefined,
        pond: FishList = shuffleFish(fishList),
        visibleFish = fillPond(pond),
        deck: Deck = shuffleDeck(starterDeck),
        shopModal: ShopModal,
        bust: boolean = false;

    const draw = () => {
        if (deck.drawn >= deck.cards.length || bust) return;
        deck = drawFromDeck(deck);
        resources = updateLineResources(resources, deck);
    };

    const reset = () => {
        selectedFish = undefined;
        deck = resetDeck(deck);
        resources = clearLineResources(resources);
    };

    const fullReset = () => {
        reset();
        round = freshRound();
        pond = shuffleFish(fishList);
        visibleFish = fillPond(pond);
        deck = shuffleDeck(starterDeck);
        resources = clearAllResources(resources);
    };

    const cleanUp = () => {
        visibleFish = fillPond(pond);
        deck = moveCardsToDiscard(deck);
        round = progressRound(round);
        if (round.time === Times.Morning) deck = shuffleDiscard(deck);
        reset();
    };

    const catchFish = () => {
        pond = fishCaught(selectedFish!, pond);
        resources = updateSafeResources(resources);
        cleanUp();
    };

    const cutLine = () => {
        resources = updateSafeResources(resources);
        lineBreak();
    };

    const lineBreak = () => {
        pond = fishEscaped(selectedFish!, pond);
        cleanUp();
    };

    $: bust = deck.totalTension > oldRod.maxTension;
    $: deckDetail = `${deck.drawn}/${
        selectedFish ? `${selectedFish.size} Revealed` : "?? Revealed"
    }`;
    $: discardDetail = `${deck.discard.length} Cards`;
    $: deck.drawn > 0
        ? (round.phase = Phases.Angling)
        : (round.phase = Phases.Prep);
</script>

<ShopModal bind:this={shopModal} {resources} {deck} />
<RulesDrawer />

<div class="flex flex-col items-center">
    <h1 class="flex text-3xl font-bold">Catfish</h1>
    <RoundDisplay {round} />
    <div class="flex flex-row my-4">
        <Pond
            {visibleFish}
            drawn={deck.drawn}
            keepNet={pond.keepNet}
            bind:selectedFish
        />

        <div class="flex flex-col justify-center gap-4 ml-5 mt-8">
            {#if selectedFish && deck.drawn === selectedFish.size && !bust}
                <button
                    class="fishButton roundButton {selectedFish &&
                    deck.drawn === selectedFish.size &&
                    !bust
                        ? 'animate-jump animate-twice ring-offset-2 ring-4 ring-sky-300'
                        : ''}"
                    on:click={() => catchFish()}>Catch Fish!</button
                >
            {:else}
                <button
                    class="fishButton roundButton"
                    on:click={() => draw()}
                    disabled={bust || selectedFish === undefined}
                    >{selectedFish ? "Reel it in!" : "Select a Fish!"}</button
                >
            {/if}

            {#if round.phase === Phases.Prep}
                <button
                    class="grid grid-cols-1 shopButton roundButton justify-items-center place-content-center"
                    on:click={() => shopModal.open(true)}
                    ><ShopIcon />Shop</button
                >
            {:else if !bust}
                <button
                    class="resetButton roundButton"
                    on:click={() => cutLine()}
                    disabled={deck.drawn === 0 ||
                        selectedFish === undefined ||
                        bust}>Cut the Line!</button
                >
            {:else}
                <button
                    class="resetButton roundButton"
                    on:click={() => lineBreak()}>Cut the Line!</button
                >
            {/if}
            <button class="resetButton rounded-md" on:click={() => fullReset()}
                >Reset</button
            >
        </div>
    </div>

    <div class="flex flex-row gap-16 mr-4">
        <TensionMeter totalTension={deck.totalTension} {bust} />

        <CardStack
            title={"Line Cards"}
            deck={deck.revealedCards}
            detail={deckDetail}
            label={`${deck.cards.length} Cards Remaining`}
        />

        <CardStack
            title={"Discard Pile"}
            deck={deck.discard}
            detail={discardDetail}
            label={"Empty!"}
        />

        <ResourceDisplay {resources} {deck} {bust} />
    </div>
</div>

<style lang="postcss">
    .fishButton {
        @apply border-2 border-black px-1 disabled font-bold  bg-sky-300;
    }

    .resetButton {
        @apply border-2 border-black px-1 disabled font-bold bg-red-500;
    }

    .shopButton {
        @apply border-2 border-black px-1 font-bold bg-green-500;
    }

    .roundButton {
        @apply h-24 w-24 p-4 py-5 rounded-full;
    }

    .disabled {
        @apply disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40;
    }
</style>
