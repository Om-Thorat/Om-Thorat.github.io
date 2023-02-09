<script lang="ts">
    import { onMount } from 'svelte';
	let adj:String = "Curios";
    let traits:Array<string> = ["Curious. ","a little bit lazy. ","also completely crazy. "]
    function sleep(ms:number) {return new Promise(resolve => setTimeout(resolve, ms));}
    async function change(){
        let i = 1
        while(true){
            for (let x = adj.length;x>0;x--){
                adj = adj.slice(0,x)
                await sleep(100)
            }
            for (let x = 0;x<traits[i].length;x++){
                adj = traits[i].slice(0,x)
                await sleep(100)
            }
            await sleep(700)
            i = i + 1
            if (i == traits.length){
                i = 0
            }
        }
    }
    onMount (change)
</script>

<div class="text-3xl font-semibold font-['Roboto'] tracking-[.12em] pt-10 text-white ">
    I am <span class="text-[#EC62BA]" id="adj">{adj}</span><span class="bar text-4xl">|</span>
</div>

<style>
    @keyframes blink{
        from {opacity: 0;}
        to {opacity: 1;}
    }
    .bar{
        font-weight: 600;
        animation: blink;
        animation-duration: 700ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
</style>
