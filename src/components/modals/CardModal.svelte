<script lang="ts">
    import type { Card } from "../../models/deck/Cards";

    export { card, open };

    let showModal: boolean = false,
        dialog: HTMLDialogElement,
        card: Card | undefined;

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
    class="flex justify-center items-center {showModal === false
        ? 'invisible'
        : ''}"
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <slot>
            <div
                class="flex h-60 w-40 scale-110 transition transform justify-center align-top rounded-md bg-gray-300 border border-black"
            >
                <div class="grid grid-cols-4 grow justify-items-center">
                    <div
                        class="font-bold text-white rounded-full bg-black flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card?.tension}
                    </div>
                    <div
                        class="{card?.bait
                            ? ''
                            : 'invisible'} font-bold text-white rounded-full bg-rose-400 flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card?.bait ? card.bait : ""}
                    </div>

                    <div
                        class="{card?.coins
                            ? ''
                            : 'invisible'} font-bold text-white rounded-full bg-yellow-500 flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card?.coins ? card.coins : ""}
                    </div>

                    <div
                        class="{card?.experience
                            ? ''
                            : 'invisible'} font-bold text-white rounded-full bg-blue-500 flex items-center justify-center mt-1"
                        style="height: 20px; width: 20px; font-size: 15px;"
                    >
                        {card?.experience ? card.experience : ""}
                    </div>
                </div>
            </div>
        </slot>
    </div>
</dialog>

<style>
    dialog {
        width: 176px;
        height: 264px;
        border-radius: 0.4em;
        border: none;
        overflow: hidden;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
