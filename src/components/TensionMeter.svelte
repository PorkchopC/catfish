<script lang="ts">
    import { oldRod } from "../models/items/Items";

    export { totalTension, bust };

    let totalTension: number;
    let bust: boolean;
</script>

<div
    class="flex flex-col items-center w-24 {bust
        ? 'animate-shake animate-twice'
        : ''}"
>
    <p class="font-bold text-center text-xl {bust ? 'text-red-600' : ''}">
        {bust ? "Line Break!" : "Tension"} <br />
        {totalTension}/{oldRod.maxTension}
    </p>
    <div class="tensionCol">
        <div
            class="bg-red-700 tensionBlock {totalTension < 5
                ? 'invisible'
                : ''} {totalTension === 5
                ? 'animate-jump animate-infinite'
                : ''}"
        >
            5
        </div>
        <div
            class="bg-red-600 tensionBlock {totalTension < 4
                ? 'invisible'
                : ''}"
        >
            4
        </div>
        <div
            class="bg-red-500 tensionBlock {totalTension < 3
                ? 'invisible'
                : ''}"
        >
            3
        </div>
        <div
            class="bg-red-400 tensionBlock {totalTension < 2
                ? 'invisible'
                : ''}"
        >
            2
        </div>
        <div
            class="bg-red-300 tensionBlock {totalTension < 1
                ? 'invisible'
                : ''}"
        >
            1
        </div>
    </div>
</div>

<style lang="postcss">
    .tensionCol {
        @apply flex flex-col grow items-center px-1 py-1 rounded-md bg-gray-300 gap-1;
    }

    .tensionBlock {
        @apply flex grow items-center justify-center rounded-md px-6;
    }
</style>
