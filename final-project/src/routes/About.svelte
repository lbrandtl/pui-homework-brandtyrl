<script lang="ts">
  import Hero from "../components/Hero.svelte";
</script>

<div>
  <div id="landing">
    <Hero>
      <div id="description">
        <h1>Hi, I'm Brandt YouRan Li.<br />Thanks for visiting!</h1>
        <br />
        <br />
        <br />
        <br />
        <h2>(ME)</h2>
        <br />
        <p>
          I was born in Nagoya, Japan and raised in Shanghai, China. I'm
          currently in Pittsburgh, PA studying Design and Human-Computer
          Interaction at
          <br />
          Carnegie Mellon University '26.
        </p>
        <br />
        <br />
        <br />
        <br />
        <div id="links">
          <h2>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brandtyouranli/">(LINKEDIN)</a
            >
          </h2>
          <h2>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1iSQjovXQNoHKHpbH18QQjPInCm3Qc1wf/view?usp=sharing"
              >(RESUME)</a
            >
          </h2>
          <h2><a href="mailto:youranl@andrew.cmu.edu">(EMAIL)</a></h2>
        </div>
      </div>
    </Hero>
    <img src="img/pfp.JPG" alt="pfp" draggable="false" />
  </div>
  <!-- <div id="resume">
    <h2>(EDUCATION)</h2>
    <div>
      <h3>Carnegie Mellon University, School of Design</h3>
      <br />
      <h4>Pittsburgh, PA</h4>
      <br />
      <br />
      <h4>Bachelor of Design in Experience Design</h4>
      <h4>Additional Major in Human Computer Interaction</h4>
    </div>
    <h2>(PUBLICATION)</h2>
    <div>
      <h3>
        SoundHolo: Sonically Augmenting Everyday Objects and the Space Around
        Them.
      </h3>
      <br />
      <h4>Daniel Rosenberg Muñoz, Kimberly Blacutt, Brandt YouRan Li</h4>
      <br />
      <br />
      <h4>
        To be presented at the 2025 ACM International Conference on Tangible,
        Embedded, and Embodied Interaction (TEI 2025)
      </h4>
    </div>
    <h2>(EXPERIENCE)</h2>
    <div>
      <h3>Research Apprentice, Spatial Experience Lab</h3>
      <br />
      <h4>Pittsburgh, PA&ensp;•&ensp;June 2024 - Present</h4>
      <br />
      <br />
      <ul>
        <li>
          Participated in the design and enhancement of the Sound Hologram
          platform, an innovative system for generating, positioning, and
          dynamically moving sound sources
        </li>
        <br />
        <li>
          Developed technology that responds to people's actions and object
          movements, creating deeply immersive auditory experiences
        </li>
      </ul>
    </div>
    <h2>&ensp;</h2>
    <div>
      <h3>Marketing & Graphic Design Intern, SLICE CMU</h3>
      <br />
      <h4>Pittsburgh, PA&ensp;•&ensp;September 2023 - May 2024</h4>
      <br />
      <br />
      <ul>
        <li>
          Conceptualized and designed diverse materials for projects at Carnegie
          Mellon University
        </li>
        <br />
        <li>
          Strategically selected media and styles to meet project goals and
          enhance marketing communications
        </li>
      </ul>
    </div>
    <h2>&ensp;</h2>
    <div>
      <h3>Product Design Intern, SOBER BEAUTY 素幸</h3>
      <br />
      <h4>Shanghai, China&ensp;•&ensp;June 2023 - August 2023</h4>
      <br />
      <br />
      <ul>
        <li>
          Collaborated on ideation, prototyping, and establishment of livery
          designs for the vehicle package, researching industry trends and
          competitor designs to inform the team’s approach
        </li>
        <br />
        <li>
          Managed and curated merchandise and promotional materials, enhancing
          visual brand identity
        </li>
        <br />
        <li>
          Established an official design department within the team,
          strengthening representation and presence
        </li>
      </ul>
    </div>
  </div> -->
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
    object-position: 40%;
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
  #description h2,
  #resume h2 {
    font-weight: 600;
    font-size: 1.75em;
  }
  #description > p {
    font-size: 1.75em;
  }
  #links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  #links > h2 {
    text-align: center;
    display: block;
  }

  #links > h2::after {
    content: "↗";
  }

  a {
    color: black;
    text-decoration: none;
  }

  #resume {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 12em 12em;
    gap: 4em 6em;
  }

  #resume * {
    color: white;
  }

  #resume h3 {
    font-size: 3em;
    font-weight: 600;
  }

  #resume h4,
  #resume li {
    font-weight: 500;
    font-size: 1.75em;
  }
</style>
