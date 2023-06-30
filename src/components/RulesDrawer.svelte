<script lang="ts">
    import { tensionValues, starterDeck } from "../models/deck/Deck";
    import RulesIcon from "./icons/RulesIcon.svelte";
</script>

<div class="flex">
    <input
        type="checkbox"
        id="drawer-toggle"
        class="relative sr-only peer/drawer"
    />
    <label
        for="drawer-toggle"
        class="absolute top-0 left-0 inline-block p-1 transition-all duration-500 bg-sky-300 border-2 border-black rounded-lg peer-checked/drawer:left-72"
    >
        <RulesIcon />
    </label>
    <div
        class="fixed top-0 left-0 z-20 w-72 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked/drawer:translate-x-0 overflow-scroll"
    >
        <div class="flex flex-col px-4 py-2 gap-2">
            <h2 class="text-xl font-semibold text-center">Rules & Info</h2>

            <div class="flex flex-row justify-center">
                <table class="table-auto blackBorder">
                    <thead class="blackBorder">
                        <tr>
                            <th class="blackBorder">No. of Cards</th>
                            <th class="blackBorder"
                                >{starterDeck.cards.length}</th
                            >
                        </tr>
                        <tr>
                            <th class="blackBorder">Tension Value</th>
                            <th class="blackBorder">Frequency</th>
                        </tr>
                    </thead>
                    {#each tensionValues as tensionValue}
                        <tbody class="blackBorder">
                            <tr>
                                <td class="blackBorder">{tensionValue}</td>
                                <td
                                    >{starterDeck.cards.filter(
                                        (value) =>
                                            value.tension === tensionValue
                                    ).length}</td
                                >
                            </tr>
                        </tbody>
                    {/each}
                </table>
            </div>

            <details
                class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
            >
                <summary
                    class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                    >The Aim of the Game</summary
                >
                <p class="text-justify px-4 py-3">
                    Take risks, catch fish and use your resources wisely in
                    order to come out on top!
                </p>
            </details>

            <details
                class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
            >
                <summary
                    class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                    >How to Play</summary
                >
                <p class="text-justify px-4 py-3">
                    Start by selecting a fish from the pond - you will attempt
                    to catch this fish by revealing a number of cards equal to
                    its size from your line deck.
                </p>
            </details>

            <details
                class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
            >
                <summary
                    class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                    >The Line Deck</summary
                >
                <p class="text-justify px-4 py-3">
                    Each card in your line deck has a tension rating (the black
                    number), and as you reveal cards your total tension may
                    rise. If your total tension ever exceeds the tension limit
                    of your equipped rod (5 with the starting rod), your line
                    will break and the fish will get away!
                </p>
            </details>

            <details
                class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
            >
                <summary
                    class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                    >Resources</summary
                >
                <p class="text-justify px-4 py-3">
                    Along with tension, revealing cards from your line deck will
                    also put various resources on the line, raising the stakes!<br
                    /><br />

                    <details
                        class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
                    >
                        <summary
                            class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                            >Bait</summary
                        >
                        <p class="text-justify px-4 py-3">
                            Bait can be spent to bait fish in the pond, giving
                            you more information on the fish's abilities and
                            making it easier to catch.
                        </p>
                    </details>

                    <details
                        class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
                    >
                        <summary
                            class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                            >Coins</summary
                        >
                        <p class="text-justify px-4 py-3">
                            Coins can be spent in the shop to gain equipment
                            including better rods, which may increase your
                            tension limit and provide other bonuses.
                        </p>
                    </details>

                    <details
                        class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
                    >
                        <summary
                            class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                            >Experience</summary
                        >
                        <p class="text-justify px-4 py-3">
                            Experience (blue number) can be spent to add
                            additional cards into your line deck to generate
                            more resources, lower your tension and encourage
                            different playstyles.
                        </p>
                    </details>
                </p>
            </details>

            <details
                class="w-full bg-white border border-blue-500 cursor-pointer mb-3"
            >
                <summary
                    class="w-full bg-white text-dark flex font-bold justify-between px-4 py-3 after:content-['+']"
                    >Breaking the Line</summary
                >
                <p class="text-justify px-4 py-3">
                    If the tension on the cards you've revealed exceeds the
                    tension limit, the line breaks. Both your selected fish and
                    all of the resources that are "On the Line" will be lost!

                    <br />
                    <br />

                    To keep any resources that are "On the Line", you must
                    either:

                    <br /> <br />- Catch the fish by revealing cards equal to
                    it's size without breaking the line, or

                    <br /> <br />- Choose to cut the line before it breaks.

                    <br /> <br />

                    If you cut the line yourself you will lose the fish, but any
                    resources "On the Line" will be added to your safe totals.
                </p>
            </details>
        </div>
    </div>
</div>

<style lang="postcss">
    .blackBorder {
        @apply border border-black;
    }
</style>
