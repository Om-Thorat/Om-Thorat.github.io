<script lang="ts">
	let top = 0;
    let right = 0;
    let turn = "2.4rad"
    let sparkle
    let anchor
    let x1 = 3
    let y1 = 3
    let x2 = (95 - Math.floor(Math.random()*20))
    let y2 = (30 - Math.floor(Math.random()*25))
    let x3 = 3
    let y3 = (50 - ((-1)**(Math.floor(Math.random()*2)))*(Math.floor(Math.random()*20)))
    let x4 = 90
    let y4 = 90
    
    function fly(){
        console.log("hey")
    }
</script>
<div class="flex absolute transition-all duration-[40ms] ease-linear w-[60px] h-[64px]" style="top: max({top}%,3%);right: max({right}%,3%);rotate:{turn}">
<div class="w-[10px] h-[60px] flex">
<svg width="10" height = "60" viewBox="0 0 10 60" class="dot transition-all duration-[40ms] ease-in fade absolute" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="30" r="2.5" bind:this={anchor} fill="#fbcb59" id="anchor" style="visibility: hidden;"></circle>
</svg>
<img src="/sparklesirl.svg" bind:this={sparkle} alt="sparkles" width="10" height="10" class="dot transition-all ease-in 40ms fade absolute hidden">
</div>
<img src="/Butterfly.gif" width="60px" height="64px" class="fly absolute transition-all duration-[40ms] ease-linear" alt="">
</div>
<div id="trails">

</div>
<style>
    @keyframes fadeout {
    from {opacity: 100%;}
    to {opacity: 0%;}
    }
    .fade{
        animation: fadeiout 900ms ease-out 100ms 1 forwards;
    }
</style>