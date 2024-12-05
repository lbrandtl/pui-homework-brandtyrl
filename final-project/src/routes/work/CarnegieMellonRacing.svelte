<script lang="ts">
  import { onMount } from "svelte";
  import Blurb from "../../components/Blurb.svelte";
  import Hero from "../../components/Hero.svelte";
  import PolaroidImage from "../../components/PolaroidImage.svelte";

  onMount(() => {
    scrollTo(0, 0);
  });
</script>

<div>
  <div id="landing">
    <Hero>
      <div id="description">
        <h1>
          Carnegie Mellong Racing together builds a fully electric Formula
          1-style racecar.
        </h1>
        <br />
        <br />
        <br />
        <br />
        <h2>(MY ROLE)</h2>
        <br />
        <p>
          As the Design Head, I lead my team in curating and creating materials
          such as branding, marketing assets, merchandise, and racecar design,
          ensuring a cohesive team identity and strong presence at competitions.
        </p>
        <br />
        <br />
        <br />
        <br />
        <div id="details">
          <div>
            <h2>(TIMELINE)</h2>
            <h4>2 Years</h4>
          </div>
          <div>
            <h2>(ROLE)</h2>
            <h4>Design Head</h4>
          </div>
          <div>
            <h2>(WITH)</h2>
            <div>
              <h4>Reagan Ka</h4>
              <h4>Russell Sang</h4>
            </div>
          </div>
        </div>
      </div>
    </Hero>
    <img
      src="img/racing_topdown_portrait.png"
      alt="sober-beauty"
      draggable="false"
    />
  </div>
  <Blurb
    label="(OVERVIEW)"
    blurb="Conceptualized, prototyped, and finalized livery  designs for the racecar, aligning with the team's  theme for a cohesive and impactful representation."
  />
  <div class="gallery">
    <PolaroidImage
      src="img/racing_render.png"
      subtitle="Render 1"
      shiftX={50}
      date=""
    />
    <PolaroidImage
      src="img/racing_render_front.png"
      subtitle="Render 2"
      shiftX={50}
      date=""
    />
    <PolaroidImage
      src="img/racing_render_ortho.png"
      subtitle="Render 3"
      shiftX={50}
      date=""
    />
  </div>
  <Blurb
    label="(OVERVIEW)"
    blurb="Established the Design Team to create annual  vehicle identity packages, and develop a  cohesive visual brand identity."
  />
  <div class="gallery">
    <PolaroidImage
      src="img/racing_real.png"
      subtitle="Shot 1"
      shiftX={50}
      date=""
    />
    <PolaroidImage
      src="img/racing_action.png"
      subtitle="Shot 2"
      shiftX={50}
      date=""
    />
    <PolaroidImage
      src="img/racing_action_front.png"
      subtitle="Shot 3"
      shiftX={50}
      date=""
    />
  </div>
</div>

<style>
  #landing {
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: 7fr 4fr;
    height: 100vh;
    background: var(--offwhite);
    overflow: hidden;
  }

  #landing > img {
    max-width: 100%;
    object-fit: cover;
    height: 100%;
  }

  #description {
    padding: 0 8em 0 12em;
    width: 100%;
  }

  #description > h1 {
    font-weight: 600;
    width: 100%;
    text-align: left;
    font-size: 3em;
  }
  #description h2 {
    font-weight: 600;
    font-size: 1.75em;
  }
  #description > p {
    font-size: 1.75em;
  }
  #details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  #details > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }

  #details > div > * {
    text-align: left;
    width: 100%;
  }
  #details > div h4 {
    font-size: 1.5em;
    font-weight: 500;
  }

  div.gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
