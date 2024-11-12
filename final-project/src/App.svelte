<script lang="ts">
  import BackgroundFeature from 
  "./components/BackgroundFeature.svelte"
  ;
</script>

<main>
  <div id="landing-hero">
    <BackgroundFeature />
    <div id="landing-text">
      <h1>Brandt YouRan Li</h1>
    </div>
  </div>
</main>

<style>
  #landing-hero {
    position: relative;
  }

  #landing-hero:first-child {
    position: absolute;
    top:0;
  }

  #landing-text {
    position: absolute;
    top: 40vh;
    left: 10vw;
  }

  #landing-text h1 {
    font-family: sans-serif;
    font-size: 5em;
    font-weight: 900;
  }
</style>
