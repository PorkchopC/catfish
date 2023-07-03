<script lang="ts">
    import type { Card } from "../models/deck/Cards";
    import LineCard from "./LineCard.svelte";
    import CardModal from "./modals/CardModal.svelte";

    export { title, drawn, deck, detail, label };

    let title: string,
        detail: string,
        deck: Card[],
        label: string,
        cardModal: CardModal,
        currentCard: Card | undefined;
</script>

<CardModal bind:this={cardModal} card={currentCard} />

<div class="flex flex-col">
    <p class="title text-xl">
        {title}
    </p>
    <p class="font-bold text-center">{detail}</p>
    <div class="cardStack">
        <p class="text-center">{label}</p>
        {#each deck as card, index (index)}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="lineCard"
                style="top:{26 * (1 * index)}px;z-index:{10 * (1 * index)};"
                on:click={() => ((currentCard = card), cardModal.open(true))}
            >
                <LineCard {card} />
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    .title {
        @apply flex justify-center text-center font-bold mb-1;
    }

    .cardStack {
        @apply flex h-60 w-40 items-center justify-center rounded-md px-6 bg-gray-400 relative;
    }

    .lineCard {
        @apply absolute animate-fade-up animate-duration-200;
    }
</style>
