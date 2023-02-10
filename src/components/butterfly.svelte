<script lang="ts">
    import { onMount } from 'svelte'
    import {GetDistance,sleep} from "../scripts/fly"
	let top = -4.5;
    let right = -4.5;
    let turn = 2.4
    let sparkle:HTMLElement
    let anchor:Element
    let trail:Element
    let x1 = -3
    let y1 = -3
    let x2 = (95 - Math.floor(Math.random()*20))
    let y2 = (30 - Math.floor(Math.random()*25))
    let x3 = 3
    let y3 = (50 - ((-1)**(Math.floor(Math.random()*2)))*(Math.floor(Math.random()*20)))
    let x4 = 100
    let y4 = 100
    let start = false
    var t = 0.001
    const k = 0.0025
    let o = 1
    async function fly(){
        if (start == true){
            o = -o 
        }   
        start = true
        let TotalX = window.innerHeight
        let TotalY = window.innerHeight
        for (let i = 1;i<1000;i++){
            if ((t>1) || (t<0)){
                t = 0.001
                break
            }
            top = ((1-t)**3)*x1 + (3*(1-t)**2)*t*x2 + (3*(1-t))*t*t*x3 + (t**3)*x4
            right = ((1-t)**3)*y1 + (3*(1-t)**2)*t*y2 + (3*(1-t))*t*t*y3 + (t**3)*y4
            var dx = x1*(-3+6*t-3*t**2)+x2*(3-12*t+9*t**2)+x3*(6*t-9*t**2)+3*x4*t**2
            dx = TotalX*dx
            var dy = y1*(-3+6*t-3*t**2)+y2*(3-12*t+9*t**2)+y3*(6*t-9*t**2)+3*y4*t**2
            dy = TotalY*dy
            turn = (Math.PI/2)+(Math.atan2(dy,dx))
            t = t +o*(k*Math.abs(turn)+0.001)
            await sleep(80)
            if ((trail.children.length <2) || (GetDistance(trail.children[trail.children.length-1],anchor) > 10 )){
                var coord = anchor.getBoundingClientRect()
                var newsparkle:HTMLElement = document.importNode(sparkle,true)
                newsparkle.setAttribute("id",`${t}`)
                newsparkle.style.position = "absolute"
                newsparkle.style.visibility = "visible"
                newsparkle.style.top = `${(coord.top)}px`
                newsparkle.style.left = `${(coord.left)}px`
                trail.append(newsparkle)
                if (trail.children.length > 10){
                    trail.children[0].remove()
                }
            }
        }
        t = 0.001
    }
    async function waitabitbro() {
        await sleep(2000)
        fly()
    }
    onMount(waitabitbro)
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="z-0 cursor-pointer flex absolute transition-all duration-[80ms] ease-linear w-[60px] h-[64px]" style="top: max({top}%,-4.5%);right: max({right}%,-4.5%);rotate:{turn}rad">
<div class="w-[10px] h-[60px] flex float-right">
<svg width="10" height = "60" viewBox="0 0 10 60" class="dot transition-all duration-[80ms] ease-in absolute" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="30" r="2.5" bind:this={anchor} fill="#fbcb59" id="anchor" style="visibility:hidden ;"></circle>
</svg>
<img src="/sparklesirl.svg" bind:this={sparkle} alt="sparkles" width="10" height="10" class="dot transition-all ease-linear duration-[80ms] fade absolute" style="visibility: hidden;">
</div>
<img src="/Butterfly.gif" width="60px" height="64px" class="fly absolute transition-all duration-[80ms] ease-linear" alt="">
</div>
<div bind:this={trail} class="contents absolute">

</div>
<style>
    @keyframes fadeout {
    from {opacity: 100%;}
    to {opacity: 0%;}
    }
    .fade{
        animation: fadeout 900ms ease-out 100ms 1 forwards;
    }
</style>