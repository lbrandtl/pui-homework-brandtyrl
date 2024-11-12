<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import WebGLFluidEnhanced from "webgl-fluid-enhanced";

    let container: HTMLDivElement;
    let simulation: WebGLFluidEnhanced;

    onMount(() => {
        simulation = new WebGLFluidEnhanced(container);
        simulation.setConfig({
      colorPalette: ["#e8f8ff"],
      backgroundColor: "#ffffff",
      curl: 0,
      bloom: false,
    });
    simulation.start();
    });

    onDestroy(() => {
        simulation.stop();
    });
    </script>

    <div bind:this={container} style="width: 100vw; height 100vh"></div>

    <style></style>