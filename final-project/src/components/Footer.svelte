<script lang="ts">
  import { link } from "svelte-routing";
  import logo from "../assets/logo.png";
  import { navigate } from "svelte-routing";
  import { tick } from "svelte";

  function scrollToWork() {
    const element = document.getElementById("work-status");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      tick().then(() => {
        scrollToWork();
      });
    }
  }
</script>

<footer>
  <img src={logo} alt="logo" draggable="false" />
  <div>
    <a on:click={scrollToWork} style="cursor: pointer">WORK</a>
    <a use:link href="/archive">ARCHIVE</a>
    <a use:link href="/about">ABOUT</a>
  </div>
  <h6>&#169; Brandt YouRanLi</h6>
</footer>

<style>
  footer {
    background: white;
    height: 20vh;
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    padding: 4em 12em;
    align-items: center;
  }

  img {
    object-fit: contain;
    max-height: calc(20vh - 8em);
  }

  footer > h6 {
    font-size: 1em;
    text-align: right;
  }

  footer > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  footer > div > a {
    font-weight: 600;
    color: black;
    text-decoration: none;
  }
</style>
