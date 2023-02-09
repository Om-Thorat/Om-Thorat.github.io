<script lang="ts">
    import { onMount } from 'svelte';
	let salut:String = "Oho";
    let salutes:Array<string> = ["I am,","Je suis,","मी आहे,","मैं हूँ,","Mesa,","Yo Soy,"]
    function sleep(ms:number) {return new Promise(resolve => setTimeout(resolve, ms));}
    async function change(){
        let i = 0
        while(true){
            salut = salutes[i]
            await sleep(700)
            i = i + 1
            if (i == salutes.length){
                i = 0
            }
        }
    }
    onMount (change)
</script>

<div class="font-['arial'] text-md tracking-[.05em] text-[#91A4F8]">
    {salut}
</div>
