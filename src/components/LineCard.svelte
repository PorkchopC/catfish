<script lang="ts">
    import type { Card } from "../models/deck/Cards";

    export { card, scale };

    let card: Card,
        scale: number = 100;
</script>

<div class="lineCard scale-{scale}">
    <div class="resourceGrid">
        <div class="resourceIcon bg-black">
            {card?.tension}
        </div>
        <div class="{card?.bait ? '' : 'invisible'} resourceIcon bg-rose-400">
            {card?.bait ? card.bait : ""}
        </div>

        <div
            class="{card?.coins ? '' : 'invisible'} resourceIcon bg-yellow-500"
        >
            {card?.coins ? card.coins : ""}
        </div>

        <div
            class="{card?.experience
                ? ''
                : 'invisible'} resourceIcon bg-blue-500"
        >
            {card?.experience ? card.experience : ""}
        </div>
        <div class="col-span-4">
            <p>{card?.name ? card.name : ""}</p>
        </div>
    </div>
</div>

<style lang="postcss">
    .lineCard {
        @apply flex h-60 w-40 transition justify-center align-top rounded-md bg-gray-300 border border-black hover:bg-gray-400 duration-300;
    }

    .resourceGrid {
        @apply grid grid-cols-4 grow justify-items-center;
    }

    .resourceIcon {
        @apply font-bold text-white rounded-full flex items-center justify-center mt-1 w-5 h-5;
    }
</style>
