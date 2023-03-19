<script lang="ts">
  import { onMount } from "svelte";
    export let since:string;
    let diff:string = "69 days 69 hours 69 minutes and 69 seconds";
    import { sleep } from "../scripts/fly";
    async function count(){
        while (true){
            const date = new Date()
            const start = new Date(since)
            var diffdate:Date = new Date(date - start)
            diff = `${diffdate.getMonth().toString().padStart(2,'0')} months ${diffdate.getDate().toString().padStart(2,'0')} days ${diffdate.getHours().toString().padStart(2,'0')} hours ${(diffdate.getMinutes().toString().padStart(2,'0'))} minutes and ${diffdate.getSeconds().toString().padStart(2,'0')} seconds` ;
            await sleep(20)
        }
    }
    onMount(count)
</script>

<span class="font-mono backdrop-blur-lg backdrop-brightness-75 px-2 rounded-sm">{diff}</span>