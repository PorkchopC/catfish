<script lang="ts">
    import type { Resources } from "../../models/items/resources";

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
    class="flex justify-center {showModal === false ? 'invisible' : ''}"
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <slot>
            <div><h1>Shop</h1></div>
            <div class="absolute top-2 left-2">
                <div
                    class="flex flex-col h-min w-40 outline-black outline-double outline-offset-2 rounded-md px-2 gap-1 divide-y-2"
                >
                    <div class="grid grid-cols-2">
                        <p
                            class="font-bold text-center underline decoration-2 col-span-2"
                        >
                            Resources
                        </p>
                        <p>Bait:</p>
                        <div class="flex justify-end">
                            <p
                                class="font-bold text-white rounded-full flex items-center justify-center mt-1 bg-rose-400"
                                style="height: 20px; width: 20px; font-size: 15px;"
                            >
                                {resources.safe.bait}
                            </p>
                        </div>
                        <p>Coins:</p>
                        <div class="flex justify-end">
                            <p
                                class="font-bold text-white rounded-full flex items-center justify-center mt-1 bg-yellow-500"
                                style="height: 20px; width: 20px; font-size: 15px;"
                            >
                                {resources.safe.coins}
                            </p>
                        </div>
                        <p>Experience:</p>
                        <div class="flex justify-end">
                            <p
                                class="font-bold text-white rounded-full flex items-center justify-center mt-1 bg-blue-500"
                                style="height: 20px; width: 20px; font-size: 15px;"
                            >
                                {resources.safe.experience}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </slot>
    </div>
</dialog>

<style>
    dialog {
        width: 800px;
        height: 500px;
        border-radius: 0.4em;
        border: none;
        overflow: hidden;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 0em;
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
