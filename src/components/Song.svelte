<script lang="ts">
    import { onMount } from 'svelte';
    let Song:string = "";
    let Artist:string = "";
    let Status:string = "";
    let image:string = "";
    function sleep(ms:number) {return new Promise(resolve => setTimeout(resolve, ms));}
	async function Gather(){
		const response = await fetch('https://notom.vercel.app/spotifyinfo')
        const list = await response.json()
        Song = list[1]
        Artist = list[3]
        Status = list[0]
        image = list[2]
        console.log(Song,Artist)
	}
    onMount (Gather)
</script>

<div class="bg rounded-2xl bg-no-repeat bg-contain backdrop:blur-[20px] flex items-center flex-col justify-center translate-y-10">
    <img src="noise2.svg" alt="" class="relative w-full h-full">
    <div class="absolute flex flex-col items-center">
        <span class="font-['Josefin_Sans'] text-[#F1A0CB] text-base tracking-wider pb-3">{Status}</span>
        <img src="{image}" width="162px" class="rounded-lg songimg" alt = "">
        <span class="font-['Josefin_Sans'] text-[#FCF55C] text-xl tracking-wider pt-4">{Song}</span>
        <span class="font-['Josefin_Sans'] text-[#F1A0CB] text-lg tracking-wider">{Artist}</span>
    </div>
</div>
<style>
    .bg{
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
        background-image: url('/Np.svg');
    }
    .songimg{
        box-shadow: 0px 0px 25.92px 1.08px rgba(152, 152, 152, 0.25);
    }
</style>
