<script lang="ts">
  import { onMount } from "svelte";
let start:number = 0
let ScrollContainer:Element
async function move(){
    document.getElementsByTagName("main")[0].style.opacity = "1"
    if (window.innerWidth  < 768){
        return
    }
    ScrollContainer.addEventListener("wheel", (evt:any) => {
        evt.preventDefault();
        ScrollContainer.scrollLeft += evt.deltaY*0.5;
    });
    ScrollContainer.addEventListener("touchstart", (evt:any) => {
        start = evt.touches[0].clientY
    });
    ScrollContainer.addEventListener("touchmove",(evt:any) =>{
        evt.preventDefault();
        ScrollContainer.scrollLeft += (start - evt.touches[0].clientY)*0.5;
    });
}
onMount(move)
</script>

<div bind:this={ScrollContainer} class="w-full h-[40%] max-md:landscape:scale-125 md:h-full flex overflow-y-scroll md:overflow-hidden overflow-x-hidden snap-y snap-mandatory md:flex-row flex-col gap-7 z-10 justify-start items-center">
    <slot />
</div>


