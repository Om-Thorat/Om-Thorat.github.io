<script lang="ts">
    import {sleep,GetDistance} from '../scripts/fly';
    import { onMount } from 'svelte';
    let btrfly:HTMLElement;
    let anchor:SVGCircleElement;
    let sparkle:HTMLElement;
    let trail:HTMLElement;
    let turn = 0;
    let left = 0;
    let ctop = 0;
    let x1 = 0;
    let y1 = 0
    let x2 = (95 - Math.floor(Math.random()*20))
    let y2 = (30 - Math.floor(Math.random()*25))
    let x3 = 3
    let y3 = (50 - ((-1)**(Math.floor(Math.random()*2)))*(Math.floor(Math.random()*20)))
    let x4 = 100
    let y4 = 100
    let t = 0.001
    let k = 0.003
    let start = false
    let o = 1;
    async function fly() {
        if (start){
            k = -k;
            o = -o;
            console.log(btrfly.style.justifyContent)
            if (trail.classList.contains("hidden")){
                trail.classList.remove("hidden")
            }
            else{
                trail.classList.add("hidden")
            }
            return
        }
        start = true
        var TotalX = window.innerWidth;
        var TotalY = window.innerHeight;
        while ((t<1) && (t>0)){
        console.log(t)
        var x = ((1-t)**3)*x1 + (3*(1-t)**2)*t*x2 + (3*(1-t))*t*t*x3 + (t**3)*x4
        var y = ((1-t)**3)*y1 + (3*(1-t)**2)*t*y2 + (3*(1-t))*t*t*y3 + (t**3)*y4
        var dx = x1*(-3+6*t-3*t**2)+x2*(3-12*t+9*t**2)+x3*(6*t-9*t**2)+3*x4*t**2
        dx = TotalX*dx
        var dy = y1*(-3+6*t-3*t**2)+y2*(3-12*t+9*t**2)+y3*(6*t-9*t**2)+3*y4*t**2
        dy = TotalY*dy
        turn = (Math.atan2(dy,dx))
        t = t + k*Math.abs((turn)) + o*0.001
        btrfly.style.rotate = `${(Math.atan2(dy,dx))}rad`
        btrfly.style.left = `${x}%`
        btrfly.style.top = `${y}%`
        await sleep(40)
        if ((((trail.children.length) < 2)) || ((GetDistance(trail.children[trail.children.length-1],anchor)) > 10)){
            var coord = anchor.getBoundingClientRect();
            var newsparkle = document.importNode(sparkle,true)
            newsparkle.setAttribute("id",`${t}`)
            newsparkle.style.position = "absolute"
            newsparkle.style.visibility = ""
            if (coord.top + 5 >= TotalY || coord.left + 5 >= TotalX){
                trail.remove()
                break
            }
            newsparkle.style.top = `${coord.top}px`
            newsparkle.style.left = `${coord.left}px`
            trail.append(newsparkle)
            if (trail.children.length >5){
                trail.children[0].remove()
            }
        }
    }
    for (let i = 100; i >= 0; i--) {
        btrfly.style.opacity = (i/100).toString();
        await sleep(10)
    }
    btrfly.style.display = "none";
}
async function wait() {
    await sleep(500)
}
onMount(fly)
</script>

<div bind:this={btrfly} style="
display: flex;
position: fixed;
transition: all 40ms linear 0s;
z-index: 10;
width: 60px;
height: 64px;
left: {left}%;
top: {ctop}%;
"
class="max-md:scale-[0.8] cursor-pointer"
>
<div style="width: 10px;height: 60px;display: flex;">
<svg width="10" height="60" viewBox="0 0 10 60" fill="none" style="transition: transform 40ms ease-in;position: absolute;" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="30" r="2.5" fill="#fbcb59" bind:this={anchor} style="visibility: hidden;"></circle>
</svg>
<img src="/sparklesirl.svg" alt="" bind:this={sparkle} width="10" height="10" class="fade max-md:scale-90" style="fill=#FFF;transition: transform 40ms ease-in;position: fixed;visibility: hidden;">
</div>
<img src="/Butterfly.gif" alt="Butterfly" on:click={fly} bind:this={btrfly} height="64px" width="60px" class="h-[64px] w-[60px]" style="transition: all 40ms linear 0s; z-index: 10;position: absolute;">
</div>
<div bind:this={trail} class=""></div>

<style>
    @keyframes fadeout {
        from {opacity: 100%;}
        to {opacity: 0%;}
    }
    @keyframes move {
        to {transform: translate(0px,0px);}
    }
    @keyframes fadeinout {
        0% {opacity: 0%;}
        50% {opacity: 100%;}
        100% {opacity: 0%;}
    }

    .fade{
        animation: fadeout 900ms ease-out 100ms 1 forwards;
    }
</style>
