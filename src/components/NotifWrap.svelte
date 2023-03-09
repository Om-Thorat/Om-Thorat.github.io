<script lang="ts">
    export let href:string;
    function send(){
        console.log(href);
        window.open(href, '_blank').focus();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="contents max-sm:hidden" on:click={send}>
<slot />
</div>