<script lang="ts">
  import { onMount } from "svelte";
  import { sleep } from "../scripts/fly";


    let list:HTMLElement

    let initial:Array<number[]> = []
    async function scatter() {
        var Bloglist = list.children[0].children
        for (let i = 0; i < Bloglist.length; i++) {
            const element = Bloglist[i];
            var coords = element.getBoundingClientRect()
            initial.push([coords.top,coords.left])
            element.style.top = `${coords.top}px`
            element.style.left = `${coords.left}px`
        }
        for (let i = 0; i < Bloglist.length; i++) {
            const element = Bloglist[i];
            element.style.top = `${Math.random()*window.innerHeight}px`
            element.style.left = `${Math.random()*window.innerWidth}px`
            element.style.position = "absolute"

        }
    }
    async function Clean() {
        var Bloglist = list.children[0].children
        for (let i = 0; i < Bloglist.length; i++) {
            await sleep(300)
            const element = Bloglist[i];
            element.style.top = `${initial[i][0]}px`
            element.style.left = `${initial[i][1]}px`
        }
        for (let i = 0; i < Bloglist.length; i++) {
            await sleep(300)
            const element = Bloglist[i];
            element.style.position = "initial"
        }
    }
    onMount(scatter)
</script>

<div class="p-3 rounded-lg right-5 text-white top-5 absolute z-10 bg-lime-400 cursor-pointer" on:click={()=>Clean()}>Clean</div>
<ul class="flex flex-col gap-3" bind:this={list}>
    <slot />
</ul>