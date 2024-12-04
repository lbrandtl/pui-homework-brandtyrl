<script lang="ts">
  import Header from "./components/Header.svelte";
  import { Router, Route } from "svelte-routing";
  import Archive from "./routes/Archive.svelte";
  import About from "./routes/About.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./routes/Home.svelte";
  import SoberBeauty from "./routes/work/SoberBeauty.svelte";
  import CarnegieMellonRacing from "./routes/work/CarnegieMellonRacing.svelte";
</script>

<main>
  <Router>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/archive" component={Archive} />
    <Route path="/about" component={About} />
    <!-- work pages -->
    <Route path="/work/sober-beauty" component={SoberBeauty} />
    <Route path="work/cmu-racing" component={CarnegieMellonRacing} />
    <Footer />
  </Router>
</main>

<style>
  main {
    background: var(--gray);
    min-height: 100vh;
  }
</style>
