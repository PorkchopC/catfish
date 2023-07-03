<script lang="ts">
    import { buyCard, shopCards } from "../../models/deck/Cards";
    import type { Deck } from "../../models/deck/Deck";
    import type { Resources } from "../../models/items/resources";
    import LineCard from "../LineCard.svelte";
    import RodIcon from "../icons/RodIcon.svelte";

    export { resources, deck, open };

    let showModal: boolean = true,
        dialog: HTMLDialogElement,
        resources: Resources,
        deck: Deck;

    const open = (show: boolean) => {
        showModal = show;
    };

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
    class="modal {showModal === false
        ? 'invisible'
        : 'animate-fade-up animate-duration-[400ms]'}"
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <slot>
            <div class="flex justify-center">
                <h1>Shop</h1>
            </div>
            <div class="resourceWrapper">
                <div class="resourceBox">
                    <div class="grid grid-cols-2">
                        <p>Bait:</p>
                        <div class="iconColumn">
                            <p class="resourceIcon bg-rose-400">
                                {resources.safe.bait}
                            </p>
                        </div>
                        <p>Coins:</p>
                        <div class="iconColumn">
                            <p class="resourceIcon bg-yellow-500">
                                {resources.safe.coins}
                            </p>
                        </div>
                        <p>Experience:</p>
                        <div class="iconColumn">
                            <p class="resourceIcon bg-blue-500">
                                {resources.safe.experience}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 mt-20 gap-4">
                <div class="flex flex-col">
                    <p class="text-center">Line Cards</p>
                    <div class="flex flex-row gap-3">
                        {#each shopCards as card}
                            <div
                                class="flex flex-col items-center hover:cursor-pointer"
                                on:click={() => buyCard(card, resources, deck)}
                            >
                                <LineCard {card} />
                                <div class="costIcon bg-blue-500">
                                    {card.cost}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="flex flex-col ml-8">
                    <p class="text-center">Equipment</p>
                    <div
                        class="flex flex-col border-2 border-black rounded-md divide-y-2 divide-dashed divide-gray-400"
                    >
                        <div class="flex flex-row items-center rounded-md py-1">
                            <div class="flex px-1">
                                <RodIcon />
                                <p class="font-bold">: 5</p>
                            </div>
                            <p class="text-center">Good Rod</p>
                        </div>
                        <div>
                            <p class="text-center">
                                A more recent model of rod
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <p class="text-center">Services</p>
                </div>
            </div>
        </slot>
    </div>
</dialog>

<style lang="postcss">
    .modal {
        @apply flex justify-center w-4/5 h-4/5 rounded-md;
    }

    .resourceWrapper {
        @apply absolute top-2 left-2;
    }

    .resourceBox {
        @apply flex flex-col h-min w-40 outline-black outline-double outline-offset-2 rounded-md px-2 gap-1 divide-y-2;
    }

    .resourceTitle {
        @apply font-bold text-center underline decoration-2 col-span-2;
    }

    .resourceIcon {
        @apply font-bold text-white rounded-full flex items-center justify-center mt-1 w-5 h-5;
    }

    .costIcon {
        @apply font-bold text-white rounded-full flex items-center justify-center mt-1 w-8 h-8;
    }

    .iconColumn {
        @apply flex justify-end;
    }
</style>
