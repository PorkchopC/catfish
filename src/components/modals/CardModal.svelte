<script lang="ts">
    import type { Card } from "../../models/deck/Cards";
    import LineCard from "../LineCard.svelte";

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
    class="{showModal === false ? 'invisible' : ''} cardModal"
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <slot>
            <LineCard {card} scale={110} />
        </slot>
    </div>
</dialog>

<style lang="postcss">
    .cardModal {
        @apply flex justify-center items-center h-60 w-40 overflow-visible;
    }
</style>
