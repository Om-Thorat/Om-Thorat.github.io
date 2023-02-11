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

<div class="bg rounded-2xl bg-no-repeat bg-contain flex items-center flex-col justify-center translate-y-0">
    <img src="noise2.svg" alt="" class="woops relative w-full h-full">
    <img src="noisesmol.svg" alt="" class="hidden oops relative w-full h-full">
    <div class="absolute flex items-center w-[85%] md:w-auto md:flex-col md:absolute md:justify-center">
        <span class="woops w-1/2 font-['Josefin_Sans'] text-[#F1A0CB] text-base tracking-wider md:pb-3 text-center md:w-full">{Status}</span>
        <img src="{image}" class=" min-w-[77px] w-[20%] -translate-x-[10%] md:translate-x-0 md:w-[16vw] max-w-[162px] rounded-xl md:rounded-lg songimg" alt = "">
        <div class="flex flex-col items-start pl-4 md:items-center">
        <span class="oops hidden font-['Josefin_Sans'] text-[#CCFFFF] text-base tracking-wider md:pb-3 text-center">{Status}</span>
        <span class="font-['Josefin_Sans'] text-[#FCF55C] text-xl tracking-wider md:pt-4 text-center leading-7 max-h-[4.5rem] overflow-hidden text-ellipsis max-w-[16ch] whitespace-nowrap">{Song}</span>
        <span class="font-['Josefin_Sans'] text-[#F1A0CB] text-lg tracking-wider text-center">{Artist}</span>
        </div>
    </div>
</div>
<style>
	@media only screen and (max-width: 768px) {
        .bg{
        background-image: url('/smolnoise.svg') !important;
        }
        .woops{
            display: none;
        }
        .oops{
            display: block;
        }
    }
    .bg{
        backdrop-filter: blur(5px);
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
        background-image: url('/Np.svg');
    }
    .songimg{
        box-shadow: 0px 0px 25.92px 1.08px rgba(152, 152, 152, 0.25);
    }
</style>
