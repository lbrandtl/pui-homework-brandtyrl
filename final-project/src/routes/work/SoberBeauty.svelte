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
          Sober Beauty 素幸 is the first Chinese clean beauty makeup brand.
        </h1>
        <br />
        <br />
        <br />
        <br />
        <h2>(MY ROLE)</h2>
        <br />
        <p>
          As a Product Design Intern, I led the design of various product
          features, including assets, packaging, web pages, and marketing
          materials, ensuring cohesive and impactful branding.
        </p>
        <br />
        <br />
        <br />
        <br />
        <div id="details">
          <div>
            <h2>(TIMELINE)</h2>
            <h4>2 Months</h4>
          </div>
          <div>
            <h2>(ROLE)</h2>
            <h4>Product Design Intern</h4>
          </div>
          <div>
            <h2>(WITH)</h2>
            <div>
              <h4>Johannes Walch</h4>
              <h4>Valentine Zining Cheng</h4>
            </div>
          </div>
        </div>
      </div>
    </Hero>
    <img src="../img/sober_beauty.png" alt="sober-beauty" draggable="false" />
  </div>
  <Blurb
    label="(OVERVIEW)"
    blurb="Curated material assets for various products, ensuring accuracy and alignment with consumer expectations through post-production editing."
  />
  <div class="gallery">
    <PolaroidImage
      src="../img/sober_beauty_foundation.png"
      subtitle="Foundation"
      date=""
    />
    <PolaroidImage
      src="../img/sober_beauty_lipstick.png"
      subtitle="Lipstick"
      date=""
    />
    <PolaroidImage
      src="../img/sober_beauty_lipoil.png"
      subtitle="Lipoil"
      date=""
    />
  </div>
  <Blurb
    label="(OVERVIEW)"
    blurb="Redesigned product pages to enhance user experience and improve product information clarity, while updating packaging to ensure security."
  />
  <div class="gallery">
    <PolaroidImage
      src="../img/sober_beauty_product_packaging.png"
      subtitle="Product Packaging"
      shiftX={50}
      date=""
    />
    <PolaroidImage
      src="../img/sober_beauty_lipstick_packaging.png"
      subtitle="Lipstick Packaging"
      shiftX={50}
      date=""
    />
    <PolaroidImage
      src="../img/sober_beauty_product_page.png"
      subtitle="Product Page"
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
