<script lang="ts">
  import Blurb from "../components/Blurb.svelte";
  import Hero from "../components/Hero.svelte";
  import ProjectShowcase from "../components/ProjectShowcase.svelte";
  import star from "../assets/star.svg";
  import { scrollPosition } from "../stores";
  import ShakeyWrapper from "../components/ShakeyWrapper.svelte";

  let brandtTranslation = 0;
  let youRanLiTranslation = 0;

  scrollPosition.subscribe((value) => {
    brandtTranslation = -value.y / 4;
    youRanLiTranslation = -value.y / 5;
  });
</script>

<div>
  <div id="landing">
    <Hero>
      <ShakeyWrapper>
        <img src={star} alt="star" draggable="false" />
      </ShakeyWrapper>
      <h1 style={`transform: translateY(${brandtTranslation}px)`}>BRANDT</h1>
      <h3 style={`transform: translateY(${youRanLiTranslation}px)`}>
        YouRan Li
      </h3>
    </Hero>
  </div>
  <div id="current-status">
    <h4>(BRANDT)</h4>
    <div>
      <h2>BDes Student at Carnegie Mellon University '26</h2>
      <h2>Experience Design + Human-Computer Interaction</h2>
      <br />
      <h3>Currently,</h3>
      <h3>Research Assistant @ Spatial Experience Lab</h3>
    </div>
  </div>
  <div id="work-status">
    <Blurb
      label="(WORK)"
      blurb="Storytelling through creativity and innovation."
    />
  </div>
  <ProjectShowcase
    src="img/sober_beauty.png"
    href="/work/sober-beauty"
    title="Sober Beauty 素幸"
    subtext="(Product/UX)"
    description="Designing user experiences for cosmetic products."
  />
  <ProjectShowcase
    src="img/racing_topdown.png"
    href="/work/cmu-racing"
    title="Carnegie Mellon Racing"
    subtext="(Identity System)"
    description="Designing the visual identity for a student-built racecar."
  />
</div>

<style>
  @keyframes growIn {
    0% {
      transform: scale(0.2);
    }
    80% {
      transform: scale(0.2);
    }
    95% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  #landing {
    height: 100vh;
    background: var(--offwhite);
  }

  #landing h1 {
    font-size: 6em;
  }

  #landing h3 {
    font-size: 3em;
    font-weight: 500;
  }

  h4 {
    font-size: 1.75em;
    line-height: 1.75em;
  }

  #current-status {
    background: var(--offwhite);
    display: grid;
    grid-template-columns: 1fr 6fr;
    padding: 12em;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  h2 {
    font-size: 3em;
  }

  #current-status > div > h3 {
    font-size: 2em;
    font-weight: 500;
  }

  #landing img {
    width: 20vw;
    animation-name: growIn;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-direction: normal;
  }
</style>
