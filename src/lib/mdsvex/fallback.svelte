<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<h1>WARNING: Using Fallback Layout!</h1>

{@render children?.()}
