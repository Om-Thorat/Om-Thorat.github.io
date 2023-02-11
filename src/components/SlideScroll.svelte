<script lang="ts">
  import { onMount } from "svelte";


let ScrollContainer:Element
async function move(){
    if (window.innerWidth  < 768){
        return
    }
    ScrollContainer.addEventListener("wheel", (evt:any) => {
    evt.preventDefault();
    ScrollContainer.scrollLeft += evt.deltaY*0.5;
});
}
onMount(move)
</script>

<div bind:this={ScrollContainer} class="w-full h-full flex overflow-visible md:flex-row md:overflow-x-hidden flex-col gap-7 z-10 justify-start items-center">
    <slot />
</div>


