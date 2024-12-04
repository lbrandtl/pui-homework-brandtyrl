<script lang="ts">
  export let label: string;
  export let blurb: string;
</script>

<div>
  <h4>{label}</h4>
  <h2>{blurb}</h2>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 6fr;
    padding: 12em;
    gap: 4em;
  }
  div > h4,
  div > h2 {
    color: white;
  }

  h2 {
    font-size: 3em;
  }
  h4 {
    font-size: 1.75em;
    line-height: 1.75em;
  }
</style>
