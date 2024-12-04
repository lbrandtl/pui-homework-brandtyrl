<script lang="ts">
  import { onMount, tick } from "svelte";
  import { get } from "svelte/store";
  import { mousePosition } from "../stores";

  let div: HTMLDivElement;
  let inner: HTMLElement;

  let cursorOrigin = { x: 0, y: 0 };
  let cursorMaxX = 0;
  let cursorMaxY = 0;
  let cursorMinX = 0;
  let cursorMinY = 0;

  let lastMove = 0;

  function addListener() {
    cursorOrigin = get(mousePosition);
    inner.style.transition = "transform 200ms ease";
    inner.addEventListener("mousemove", moveToMouse);
  }

  function removeListener() {
    inner.style.transition = "transform 500ms ease";
    inner.style.transform = "translate(0px, 0px)";
    inner.removeEventListener("mousemove", moveToMouse);
  }

  function moveToMouse() {
    if (Date.now() - lastMove < 16) {
      return;
    }
    lastMove = Date.now();
    const cursorPosition = get(mousePosition);
    if (
      cursorPosition.x > cursorMaxX ||
      cursorPosition.y > cursorMaxY ||
      cursorPosition.x < cursorMinX ||
      cursorPosition.y < cursorMinY
    ) {
      removeListener();
      return;
    }
    const dx = cursorPosition.x - cursorOrigin.x;
    const dy = cursorPosition.y - cursorOrigin.y;

    let angle: number;
    if ((dx <= 0 && dy >= 0) || (dx >= 0 && dy <= 0)) {
      angle = Math.atan2(dy, dx) * 0.1;
    } else {
      angle = Math.atan2(dy, dx) * -0.1;
    }

    inner.style.transform = `scale(1.25) translate(${dx * 0.7}px, ${dy * 0.7}px) rotate(${angle}rad)`;
  }

  onMount(() => {
    cursorOrigin = get(mousePosition);

    cursorMaxX = div.getBoundingClientRect().right;
    cursorMaxY = div.getBoundingClientRect().bottom;
    cursorMinX = div.getBoundingClientRect().left;
    cursorMinY = div.getBoundingClientRect().top;

    inner.addEventListener("mouseenter", addListener);
    inner.addEventListener("mouseleave", removeListener);
  });
</script>

<div bind:this={div} class="shakey-wrapper">
  <div bind:this={inner} class="shakey-inner">
    <slot></slot>
  </div>
</div>

<style>
  .shakey-wrapper {
    cursor: pointer;
    padding: 1em;
    border-radius: 1em;
  }

  .shakey-inner {
    display: block;
  }
</style>
