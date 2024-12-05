<script lang="ts">
  import ShakeyWrapper from "./ShakeyWrapper.svelte";
  import star from "../assets/star.svg";
  import { onMount, tick } from "svelte";
  import { link } from "svelte-routing";
  import { scrollPosition } from "../stores";
  import { navigate } from "svelte-routing";

  let eyeCandyHeight: number;
  let lastScrollPositionY = 0;
  let hidden = false;

  scrollPosition.subscribe((value) => {
    if (value.y > 0 && value.y >= lastScrollPositionY) {
      hidden = true;
    } else {
      hidden = false;
    }

    lastScrollPositionY = value.y;
  });

  onMount(() => {
    const links = document.querySelector("header #links");
    if (links) {
      eyeCandyHeight = links.clientHeight;
    }
  });

  function scrollToWork() {
    const element = document.getElementById("work-status");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("");
      tick().then(() => {
        scrollToWork();
      });
    }
  }
</script>

<header class={hidden ? "hidden" : ""}>
  <a id="logo" href="" use:link>
    <!-- use empty string to navigate to the root. must be empty and not / due to
    baseURL -->
    <span class="bold">BRANDT</span>
    <span class="normal">YouRan Li</span>
  </a>
  <nav id="links">
    <ShakeyWrapper>
      <a on:click={scrollToWork}>WORK</a>
    </ShakeyWrapper>
    <ShakeyWrapper>
      <a use:link href="archive">ARCHIVE</a>
    </ShakeyWrapper>
    <ShakeyWrapper>
      <a use:link href="about">ABOUT</a>
    </ShakeyWrapper>
  </nav>
  <div
    style={`justify-self: end; width: calc(2em + ${eyeCandyHeight}px); height: calc(2em + ${eyeCandyHeight}px); aspect-ratio: 1/1;`}
  >
    <ShakeyWrapper
      ><a
        target="_blank"
        id="eye-candy"
        href="https://drive.google.com/file/d/1iSQjovXQNoHKHpbH18QQjPInCm3Qc1wf/view?usp=sharing"
        >✎</a
      ></ShakeyWrapper
    >
  </div>
</header>

<style>
  header {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    padding: 3em 12em 0em 12em;
    transition: opacity ease 200ms;
  }

  header.hidden {
    opacity: 0;
  }

  header > #links {
    display: flex;
    flex-direction: row;
    gap: 1.2em;
    background: white;
    padding: 0 1em;
    border-radius: 2em;
  }

  header > #links a {
    font-weight: 600;
    font-size: 1em;
    text-decoration: none;
    color: black;
  }

  #logo {
    justify-self: start;
    color: black;
    text-decoration: none;
  }

  #logo > span {
    font-size: 2em;
  }

  #logo > .bold {
    font-weight: 600;
    margin-right: 0.1em;
  }

  #logo > .normal {
    font-weight: 500;
  }

  #eye-candy {
    height: 100%;
    width: 100%;
    aspect-ratio: 1/1;
    background: white;
    border-radius: 100%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    color: black;
    text-decoration: none;
    font-size: 1em;
  }
</style>
