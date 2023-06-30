<script lang="ts">
    import type { Card } from "../models/deck/Cards";
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
                class="lineCard gap-2"
                style="top:{26 * (1 * index)}px;z-index:{10 * (1 * index)};"
                on:click={() => ((currentCard = card), cardModal.open(true))}
            >
                <div class="grid grid-cols-4 grow justify-items-center">
                    <div
                        class="font-bold text-white rounded-full bg-black flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card.tension}
                    </div>
                    <div
                        class="{card.bait
                            ? ''
                            : 'invisible'} font-bold text-white rounded-full bg-rose-400 flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card.bait ? card.bait : ""}
                    </div>

                    <div
                        class="{card.coins
                            ? ''
                            : 'invisible'} font-bold text-white rounded-full bg-yellow-500 flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card.coins ? card.coins : ""}
                    </div>

                    <div
                        class="{card.experience
                            ? ''
                            : 'invisible'} font-bold text-white rounded-full bg-blue-500 flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card.experience ? card.experience : ""}
                    </div>
                </div>
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
        @apply flex h-60 w-40 justify-center align-top rounded-md bg-gray-300 absolute border border-black animate-fade-up animate-duration-200 hover:bg-gray-400 transition duration-300;
    }
</style>
