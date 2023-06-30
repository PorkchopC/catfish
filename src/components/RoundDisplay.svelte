<script lang="ts">
    import type { Round } from "../models/Structure";

    export { round };

    let round: Round;
</script>

<div class="grid grid-cols-2 w-1/3 content-center">
    <div
        class="bg-gradient-to-l {round.time === 'Morning'
            ? 'from-orange-200'
            : round.time === 'Afternoon'
            ? 'from-amber-400'
            : round.time === 'Evening'
            ? 'from-indigo-400'
            : ''} pr-1 h-14"
    >
        <p class="text-end font-bold text-xl">{round.day}</p>
    </div>
    <div
        class="bg-gradient-to-r {round.time === 'Morning'
            ? 'from-orange-200'
            : round.time === 'Afternoon'
            ? 'from-amber-400'
            : round.time === 'Evening'
            ? 'from-indigo-400'
            : ''} h-14"
    >
        <p class="font-bold text-xl">{round.time}</p>
    </div>
    <div
        class="flex absolute col-span-2 h-14 w-1/3 justify-center items-end pb-1"
    >
        <p
            class="underline decoration-2 {round.phase === 'Prep Phase'
                ? 'bg-white'
                : 'bg-sky-300'} rounded-full px-2"
        >
            {round.phase}
        </p>
    </div>
</div>
