<script lang="ts">
    import type { Deck } from "../models/deck/Deck";
    import { oldRod } from "../models/items/Items";
    import type { Resources } from "../models/items/resources";
    import RodIcon from "./icons/RodIcon.svelte";

    export { resources, deck, bust };

    let resources: Resources;
    let deck: Deck;
    let bust: boolean;
</script>

<div class="flex flex-col items-center">
    <div><p class="title text-xl">Resources</p></div>
    <div class="mb-3">
        <div class="flex flex-row">
            <RodIcon />
            <p class="font-bold">
                : {oldRod.name} ({oldRod.maxTension})
            </p>
        </div>
    </div>
    <div class="resourceWrapper {bust ? 'animate-shake animate-twice' : ''}">
        <div class="resourceGrid">
            <p
                class="resourceTitle {deck.totalTension === 5
                    ? 'animate-wiggle animate-infinite text-red-600'
                    : ''}"
            >
                On the Line
            </p>
            <p>Bait:</p>
            <div class="relative flex justify-end">
                <p
                    class="resourceIcon bg-rose-400"
                    style="height: 20px; width: 20px; font-size: 15px;"
                >
                    {resources.line.bait}
                </p>
                <p
                    class="absolute inset-y-0 -right-10 text-rose-400 {deck
                        .currentCard?.bait
                        ? 'animate-fade-down animate-reverse'
                        : 'invisible'} font-bold"
                >
                    +1
                </p>
            </div>
            <p>Coins:</p>
            <div class="relative flex justify-end">
                <p
                    class="resourceIcon bg-yellow-500"
                    style="height: 20px; width: 20px; font-size: 15px;"
                >
                    {resources.line.coins}
                </p>
                <p
                    class="absolute inset-y-0 -right-10 text-yellow-500 {deck
                        .currentCard?.coins
                        ? 'animate-fade-down animate-reverse'
                        : 'invisible'} font-bold"
                >
                    +1
                </p>
            </div>
            <p>Experience:</p>
            <div class=" relative flex justify-end">
                <p
                    class="resourceIcon bg-blue-500"
                    style="height: 20px; width: 20px; font-size: 15px;"
                >
                    {resources.line.experience}
                </p>
                <p
                    class="absolute inset-y-0 -right-10 text-blue-500 {deck
                        .currentCard?.experience
                        ? 'animate-fade-down animate-reverse'
                        : 'invisible'} font-bold"
                >
                    +1
                </p>
            </div>
        </div>

        <div class="resourceGrid">
            <p class="resourceTitle">Safe</p>
            <p>Bait:</p>
            <div class="flex justify-end">
                <p
                    class="resourceIcon bg-rose-400"
                    style="height: 20px; width: 20px; font-size: 15px;"
                >
                    {resources.safe.bait}
                </p>
            </div>
            <p>Coins:</p>
            <div class="flex justify-end">
                <p
                    class="resourceIcon bg-yellow-500"
                    style="height: 20px; width: 20px; font-size: 15px;"
                >
                    {resources.safe.coins}
                </p>
            </div>
            <p>Experience:</p>
            <div class="flex justify-end">
                <p
                    class="resourceIcon bg-blue-500"
                    style="height: 20px; width: 20px; font-size: 15px;"
                >
                    {resources.safe.experience}
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .title {
        @apply flex justify-center text-center font-bold mb-2;
    }

    .resourceTitle {
        @apply font-bold text-center underline decoration-2 col-span-2;
    }

    .resourceWrapper {
        @apply flex flex-col h-min w-40 outline-black outline-double outline-offset-2 rounded-md px-2 gap-1 divide-y-2;
    }

    .resourceGrid {
        @apply grid grid-cols-2;
    }

    .resourceIcon {
        @apply font-bold text-white rounded-full flex items-center justify-center mt-1;
    }
</style>
