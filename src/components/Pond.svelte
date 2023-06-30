<script lang="ts">
    import type { Fish } from "../models/fish/Fish";
    import FishIcon from "./icons/FishIcon.svelte";
    export { visibleFish, drawn, selectedFish, keepNet };

    let visibleFish: Fish[], selectedFish: Fish, drawn: number, keepNet: Fish[];
</script>

<div class="flex flex-row gap-5">
    <div class="flex flex-col">
        <p class="title pb-1 text-xl">Keep Net</p>
        <div class="keepNet h-60 w-56">
            {#each keepNet as fish}
                <FishIcon {fish} width="120px" height="80px" />
            {/each}
        </div>
    </div>
    <div class="flex flex-col">
        <p class="title text-xl pb-1">The Pond</p>
        <div class="pond">
            {#each visibleFish as fish (fish.id)}
                <button
                    class="fish disabled {fish === selectedFish
                        ? 'selected'
                        : ''}"
                    on:click={() => (selectedFish = fish)}
                    disabled={selectedFish &&
                        selectedFish.name != fish.name &&
                        drawn > 0}
                >
                    <FishIcon {fish} />
                </button>
            {/each}
        </div>
    </div>
</div>

<style lang="postcss">
    .pond {
        @apply grid grid-cols-2 content-center outline-blue-700 outline-dashed rounded-full px-6;
    }

    .keepNet {
        @apply grid grid-cols-2 content-start justify-items-center outline-black outline-dashed rounded-md px-2 py-2;
    }

    .fish {
        @apply cursor-pointer hover:animate-wiggle hover:animate-infinite;
    }

    .selected {
        @apply cursor-default animate-wiggle-more animate-infinite;
    }

    .title {
        @apply flex justify-center text-center font-bold mb-2;
    }

    .disabled {
        @apply disabled:cursor-not-allowed disabled:opacity-40;
    }
</style>
