<script lang="ts">
  import PolaroidImage from "../components/PolaroidImage.svelte";
</script>

<div>
  <div id="landing">
    <h2>(ARCHIVE)</h2>
    <h1>Experimental archive of my project explorations.</h1>
  </div>
  <div id="gallery">
    <PolaroidImage
      src="img/archive/rendering_2.png"
      subtitle="(Rendering)"
      date="(2024)"
    />
    <PolaroidImage
      src="img/archive/drawing_1.png"
      subtitle="(Drawing)"
      date="(2022)"
      shiftY={25}
    />
    <PolaroidImage
      src="img/archive/stampmaking.png"
      subtitle="(Stamp Making)"
      date="(2022)"
      shiftX={50}
      shiftY={50}
    />
    <PolaroidImage
      src="img/archive/illustration.png"
      subtitle="(Illustration)"
      date="(2024)"
    />
    <PolaroidImage
      src="img/archive/rendering_1.png"
      subtitle="(Rendering)"
      date="(2023)"
      shiftX={50}
    />
    <PolaroidImage
      src="img/archive/drawing_2.png"
      subtitle="(Drawing)"
      date="(2023)"
      shiftY={50}
    />
  </div>
</div>

<style>
  #landing {
    background: var(--offwhite);
    border-radius: var(--border-radius);
    min-height: 50vh;
    padding: 4em 12em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20em;
  }

  #landing h2 {
    font-size: 1.75em;
  }

  #landing h1 {
    font-size: 3em;
  }

  #gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
