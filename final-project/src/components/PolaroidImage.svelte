<script lang="ts">
  export let src: string;
  export let subtitle: string;
  export let date: string;

  export let shiftX = 0;
  export let shiftY = 0;
</script>

<div
  style={`background-image: url(${src}); background-position: ${shiftX}% ${shiftY}%;`}
  class="polaroid"
>
  <div class="description">
    <h6>{subtitle}</h6>
    <h6>{date}</h6>
  </div>
</div>

<style>
  div.polaroid {
    aspect-ratio: 1/1;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  div.polaroid > div.description {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: var(--offwhite);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
  }

  div.polaroid > div.description > h6 {
    font-weight: 500;
    font-size: 1.75em;
  }
</style>
