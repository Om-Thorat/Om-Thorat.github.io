<script lang="ts">
    import { sleep } from "../scripts/fly";

    async function out(evt:Event){
        evt.preventDefault()
        // document.getElementsByTagName("main")[0].style.opacity = "1"
        // await sleep(200)
        // document.getElementsByTagName("main")[0].style.transition = "all"
        document.getElementsByTagName("main")[0].style.opacity= "0"
        await sleep(1000)
        console.log(evt.target)
        window.location = evt.target.href
    }


</script>

<div class="scale-125 md:scale-100 text-center w-[50%] justify-between md:justify-evenly flex py-3 font-['VT323'] text-[#91A4F8] text-2xl">
    <a href="/"  on:click={Event => out(Event)} class="z-30">//Home</a>
    <a href="/projects" on:click={Event => out(Event)} class="z-30">//Projects</a>
    <a href="/wall" on:click={Event => out(Event)} class="z-30">//Wall</a>
</div>