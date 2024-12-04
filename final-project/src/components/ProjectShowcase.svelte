<script lang="ts">
  import { link } from "svelte-routing";

  export let src: string;
  export let href: string;

  export let title: string;
  export let subtext: string;
  export let description: string;

  let hovering = false;
</script>

<a
  {href}
  use:link
  on:mouseenter={() => {
    hovering = true;
  }}
  on:mouseleave={() => {
    hovering = false;
  }}
  class="showcase"
>
  <div class={`text-section ${hovering ? "hovering" : ""}`}>
    <div>
      <h1>{title}</h1>
      <h2>{subtext}</h2>
    </div>
    <h4>{description}</h4>
  </div>
  <img {src} alt={src} />
</a>

<style>
  a.showcase {
    display: grid;
    grid-template-columns: 7fr 4fr;
    height: 50vh;
  }

  * {
    color: black;
    text-decoration: none;
  }
  div.text-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 12em;
    padding-right: 4em;
    padding-top: 4em;
    padding-bottom: 4em;
    gap: 4em;
    background: var(--offwhite);
    border-radius: var(--border-radius);
    align-items: center;
    transition: background 0.2s ease;
  }
  div.text-section.hovering {
    background: #f1f1f1;
  }
  div.text-section > div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 1.75em;
  }
  h4 {
    font-weight: 500;
    font-size: 1.5em;
  }

  img {
    height: 50vh;
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }
</style>
