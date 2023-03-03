<script lang="ts">
    import { onMount } from 'svelte';
    let Song:string = "";
    let Artist:string = "";
    let Status:string = "";
    let image:string = "";
    let img:HTMLElement;
    let loading:HTMLElement;
    function sleep(ms:number) {return new Promise(resolve => setTimeout(resolve, ms));}
	async function Gather(){
        const uff = await fetch('https://notom.vercel.app/track?n=home&p=visit')
		const response = await fetch('https://notom.vercel.app/spotifyinfo')
        const list = await response.json()
        Song = list[1]
        Artist = list[3]
        Status = list[0]
        image = list[2]
        console.log(Song,Artist)
        if(img.complete){
        loading.classList.add("hidden")
    }
	}
    onMount (Gather)
</script>

<div class="bg bg-[url('/smolnoise.svg')] md:bg-[url('/Np.svg')] rounded-2xl max-md:landscape:bg-[url('/Np.svg')] bg-no-repeat bg-contain flex items-center flex-col justify-center translate-y-0">
    <img src="noise2.svg" alt="" class="hidden md:block max-md:landscape:block relative w-full h-full">
    <img src="noisesmol.svg" alt="" class="md:hidden max-md:landscape:hidden relative w-full h-full">
    <div class="absolute flex items-center w-[85%] md:w-auto max-md:landscape:w-auto md:flex-col max-md:landscape:flex-col max-md:landscape:absolute max-md:landscape:justify-center md:absolute md:justify-center">
        <span class="hidden md:block max-md:landscape:text-[1.5vw] max-md:landscape:block w-1/2 font-['Josefin_Sans'] text-[#F1A0CB] text-base tracking-wider md:pb-3 max-md:landscape:pb-[0.6vw] text-center md:w-full max-md:landscape:w-full">{Status}</span>
        <img bind:this={loading} src="but.gif" class=" min-w-[77px] w-[20%] -translate-x-[10%] md:translate-x-0 max-md:landscape:translate-x-0 md:w-[16vw] max-md:landscape:w-[16vw] max-w-[162px] rounded-xl md:rounded-lg max-md:landscape:rounded-lg songimg" alt = "">
        <img bind:this={img} src="{image}" class=" min-w-[77px] w-[20%] -translate-x-[10%] md:translate-x-0 max-md:landscape:translate-x-0 md:w-[16vw] max-md:landscape:w-[16vw] max-w-[162px] rounded-xl md:rounded-lg max-md:landscape:rounded-lg songimg" alt = "">
        <div class="flex flex-col items-start mx-2 md:items-center max-md:landscape:items-center">
        <span class="md:hidden max-md:landscape:hidden font-['Josefin_Sans'] text-[#CCFFFF] text-base tracking-wider md:pb-3 max-md:landscape:pb-3 text-center">{Status}</span>
        <span class="font-['Josefin_Sans'] text-[#FCF55C] text-xl max-md:landscape:text-[2vw] max-md:landscape:pt-[2vw] max-md:landscape:pb-[2vw] max-md:landscape:max-h-[9rem] tracking-wider md:pt-4 text-center leading-7 max-h-[4.5rem] overflow-hidden text-ellipsis max-w-[16ch] max-md:landscape:max-w-[12ch] whitespace-nowrap">{Song}</span>
        <span class="font-['Josefin_Sans'] text-[#F1A0CB] text-lg max-md:landscape:text-[1.6vw] tracking-wider md:text-center max-w-[16ch] overflow-hidden text-ellipsis max-h-[4rem] text-left">{Artist}</span>
        </div>
    </div>
</div>
<style>
    .bg{
        backdrop-filter: blur(5px);
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    }
    .songimg{
        box-shadow: 0px 0px 25.92px 1.08px rgba(152, 152, 152, 0.25);
    }
</style>
