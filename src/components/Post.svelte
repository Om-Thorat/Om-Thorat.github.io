<script lang="ts">
    export let cls:string;
    let d:HTMLElement;
    function showtip(){
        console.log(d.children[0].children[0])
        document.getElementById("tip").innerText = d.children[0].children[0].getAttribute('alt') ?? "The Wall";
    }
</script>

<div class="absolute {cls}" bind:this={d} on:mouseenter={showtip} on:mouseleave={()=>{document.getElementById("tip").innerText = "The Wall"}}>
    <slot></slot>
</div>