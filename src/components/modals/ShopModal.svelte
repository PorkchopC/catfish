<script lang="ts">
    import { shopCards } from "../../models/deck/Cards";
    import type { Resources } from "../../models/items/resources";
    import LineCard from "../LineCard.svelte";

    export { resources, open };

    let showModal: boolean = false,
        dialog: HTMLDialogElement,
        resources: Resources;

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
            <div class="flex justify-center"><h1>Shop</h1></div>
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
            <div class="grid grid-cols-4 grow mt-20">
                <div class="col-span-3 flex flex-col">
                    <p class="text-center">Line Cards</p>
                    <div class="flex flex-row gap-3">
                        {#each shopCards as card}
                            <div class="flex flex-col items-center">
                                <LineCard {card} />
                                <div>
                                    <div class="costIcon bg-blue-500">
                                        {card.cost}
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="flex flex-col">
                    <p class="text-center">Equipment</p>
                    <div />
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
        @apply flex justify-center w-3/4 h-3/4 rounded-md;
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
