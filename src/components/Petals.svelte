<script lang="ts">
    import { onMount } from "svelte";
    import { sleep } from "../scripts/fly";
    let pdiv:HTMLDivElement;
    const petalRotations = [-80, -60, -40, -20, 10, 40, 60, 80, 100];
    async function assign(){
        let petals = pdiv.children;
        // console.log("hi");
        await sleep(50)
        for(let i = 0; i < petals.length; i++){
            const petals = Array.from(pdiv.children) as HTMLDivElement[];
            // console.log(petals[i]);
            petals[i].style.rotate = `${petalRotations[i]}deg`;
        }
    }

    onMount(assign)
    
</script>

<div class="contents" bind:this={pdiv}>
<div class="petal absolute top-[220px] left-[880px] z-0 bg-[#ff6186] theonewhogoes"></div>
<div class="petal absolute top-[220px] left-[880px] z-10 bg-[#ff6186]"></div>
<div class="petal absolute top-[220px] left-[900px] z-40 bg-[#ff6186]"></div>
<div class="petal absolute top-[220px] left-[880px] z-20 bg-[#ff6186]"></div>
<div class="petal absolute top-[220px] left-[880px] z-30 bg-[#ee426a]"></div>
<div class="petal absolute top-[220px] left-[880px] z-20 bg-[#ff6186]"></div>
<div class="petal absolute top-[235px] left-[880px] z-40 bg-[#ff6186]"></div>
<div class="petal absolute top-[220px] left-[880px] z-10 bg-[#ff6186]"></div>
<div class="petal absolute top-[220px] left-[880px] z-0 bg-[#ff6186]"></div>
</div>

<style>
    
    .petal{
        width: 50px;
        height: 50px;
        /* background: #fe7696; */
        border-radius: 0px 50%;
        position: absolute;
        box-shadow: 0 0 10px #D1123F;
        transform-origin: bottom right; 
        animation: breathe 5s infinite alternate;
        scale: 2;
        rotate: 0deg;
        transition: rotate 1s ease-out;				
    }

    @keyframes breathe {
        0%{
            scale: 2;
        }
        50%{
            scale: 1.9;
        }
        100%{
            scale: 2;
        }
    }
    
    @keyframes leave {
        0%{
            rotate: -80deg;
            top: 220px;
            left: 880px;
        }
        10%{
            rotate: -100deg;
            top: 220px;
            left: 880px;
        }
        90% {
            top: 1000px;
            left: 200px;
            rotate: 100deg;
            opacity: 100%;
        }
        91% {
            top: 1000px;
            left: 200px;
            rotate: 100deg;
            opacity: 0%;

        }
        92%{
            rotate: -80deg;
            top: 220px;
            left: 880px;
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

    .theonewhogoes{
        animation: leave 16s infinite ease-in 2s;
    }
</style>