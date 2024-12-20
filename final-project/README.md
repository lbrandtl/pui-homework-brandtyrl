
# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 

## Part 1: Website Description

I created a personal portfolio website as a collection of my artwork and to share detailed information about each project. The website also introduces me as a designer, allowing visitors to learn more about me as they explore my work. It's designed for a general audience—anyone who stumbles across the site, is casually interested in my projects, and is curious to learn more. The website is engaging, offering a variety of content to explore, but what initially draws people in is the playful nature of the homepage. Users can interact with elements, moving them around fun and captivatingly. My goal was to create something that grabs attention without being overwhelming, encouraging visitors to dive deeper into my portfolio and explore my work.

## Part 2: User Interaction

1. Hover over the banner elements to explore different sections—move your cursor around and watch the words respond.
2. Scroll down to make the banner elements disappear, and scroll back up to bring them back.
3. Hover over the logo to play around with it. Move your cursor across the star on the homepage to see it interact.
4. Hover over the works to click in and explore—move your cursor across the pieces for preview.
5. Visit project pages to dive into the details and view the works available.
6. On the About page, click on specific words to access external links related to me.

## Part 3: External Tool

1. Svelte  
   * A modern, performance-oriented framework that fits the needs of my website.
   * It serves as the complete UI library, powering the entire site.
   * It simplified the development process by modularizing components I frequently reused - like the layout and the 'Shakey Wrapper' - making everything more efficient and streamlined, such as as the layouts and the 'Shakey Wrapper'.

## Part 4: Design Iteration

From the beginning of my prototype, I envisioned my portfolio with an interactive element. While I didn't have a specific interaction in mind, I was open to exploring different possibilities. Initially, I experimented with a fluid simulator that allowed users to create fluid motion through interaction. While intriguing, I quickly realized it was too distracting and created a messy background that clashed with my text.
I wanted an interactive feature that was fun yet subtle—something engaging that wouldn't overshadow the focus of my work. Eventually, I found inspiration and developed the 'Shakey Feature' feature, where users can hover over a word to see it respond dynamically to their cursor. It creates the right balance: it's unique and interesting without drawing too much attention away from the rest of the site, encouraging visitors to continue exploring my work as intended.

## Part 5: Implementation Challenge

Creating the 'Shakey Wrapper' a challenge, especially when it came to designing and implementing how it responds to the user's mouse movements. Figuring out the right motion and interaction was tricky and took some trial and error.
Another trouble was deploying Svelte onto GitHub. I encountered issues with loading relative URLs for my project images and navigation, which required debugging and adjustments to get everything working smoothly.

## Part 6: Generative AI Use and Reflection

For the 'Shakey Wrapper,' I was initially uncertain about calculating the element's rotational angle to make it respond dynamically to the cursor's position relative to its origin point. To solve this, I turned to GenAI for guidance, which helped me approach the problem with tangent-based calculations. Using these calculations, I created the smooth, responsive rotation effect that tracks the cursor's movement. The resulting angle gives the element a playful and engaging rotation, enhancing its interactivity and overall appeal.

| Tool Name | Ratings      | design | plan | write code | debug |
| :-------- | :----------- | :----: | :--: | :--------: | :---: |
| ChatGPT   | Usage        |   No   |  Yes |    Yes     |  No   |
| ChatGPT   | Productivity |   4    |   7  |     5      |   4   |

ChatGPT aligned well with my expectations and plan in [FP2](#generative-ai-use-plan). It provided valuable support when I needed help integrating elements I wasn’t sure how to approach or use. It was especially helpful in offering solutions to address specific challenges, like with the Shakey Wrapper feature.  That said, ChatGPT didn’t influence my final design or implementation plan. I had already envisioned how the Shakey Wrapper would function before seeking assistance, and I approached ChatGPT to help me execute my pre-planned idea.  I accepted ChatGPT’s suggestions and followed its instructions to achieve the solution I was aiming for. I evaluated its output by testing whether it effectively addressed the problem I presented and functioned as intended.  Pros of using ChatGPT: It’s incredibly helpful when I’m stuck and unsure how to proceed, offering clear, step-by-step explanations that help me understand and learn.  Cons of using ChatGPT: It sometimes provides direct solutions, which can limit opportunities for me to discover and solve problems on my own.

---

# **FP3 \- Final Project Check-in**

I came across a fluid simulator online and am considering using it as the background for my website. It creates a dynamic, interactive, fluid pattern that users can manipulate with cursors, which feels fun and unique. I've experimented with the settings to create a fluid motion that I find beautiful. While I'm aware it might be distracting or overwhelming for users, I'm enjoying the interactive element it brings.
So far, I have yet to use GenAI for this project. I've been sticking to my implementation plan and seeking help only when encountering challenges with a library or something unfamiliar. The fluid simulator comes with clear instructions, making it easy for me to adjust and customize the settings without additional assistance.

---

# **FP2 \- Evaluation of the Final project**

## Project Description

Through this project, I aim to create a professional portfolio website that showcases my work and skills, providing potential employers with an accessible way to review my projects and gain insight into my approach and expertise.

## High-Fi Prototypes

### *Prototype 1*

![Personal Portfolio Prototype 1](images/Prototype1.png)

While users were able to navigate the main page of my website successfully, they felt there was a lack of visual hierarchy and balance, with all content seeming to have the same level of emphasis. Additionally, users suggested that instead of jumping straight into my work, they would prefer an introduction that provides more context about who I am and what I do.

### *Prototype 2*

![Personal Portfolio Prototype 2](images/Prototype2.png)

Similar to the main page, while users were able to access content on individual project pages, they felt that the layout appeared overly harsh and overwhelming due to its crowded appearance. They suggested a cleaner, more spaced-out design to improve readability and flow.

## Usability Test

For my usability test, I explained to the participants that I was building a professional portfolio and then asked them to navigate the main page and explore my collection of projects. Everyone was able to perform and complete the task at hand successfully. However, I was still given some very helpful and insightful feedback on how I could improve the design of the portfolio to enhance it for the users further. One of the main suggestions was to create a clearer visual hierarchy so that the important information stands out rather than having everything compete for attention. Users also felt that the layout was too cramped and a bit overwhelming, so I was recommended to have more spacing overall between my contents for easier accessible reading. They also suggested that I add a short biography on the top of my main page to give visitors a sense of who I am before diving into my work.
I took all of the feedback I received into consideration and refined the design by adjusting features such as the colors and typeface styles in order to make the key details more noticeable and help improve the user’s natural navigational flow when browsing through my portfolio. I focused on the order of information I wanted users to follow through and added these visual elements in order to guide them. I also cleaned up my content to the best of my abilities to avoid the heavy and almost ‘childlike’ feel some users mentioned and aimed for a more clean and professional look. Lastly I added a short introduction of myself at the top, where I feel I could also further experiment with a bit of interactivity to make it more fun and engaging to the users.

## Updated Designs

### *Revised Prototypes*

![Personal Portfolio Revised Prototype 1](images/Revision1.png)
![Personal Portfolio Revised Prototype 2](images/Revision2.png)

Based on the user feedback I received, I updated my design to prioritize visual hierarchy and create a more professional look overall. As a result, I actually prefer the new aesthetic to the previous version; it feels a lot more clean and deliberate for me.

## Feedback Summary

The main feedback from the lab was to think more about the interactivity of my portfolio and ways to make it distinctive. I need to brainstorm features that grab attention without distracting from the core purpose of the portfolio. One idea I’m considering is adding an optional background effect that users can trigger. For example, when activated, a gradient could follow the cursor, freezing in place as the new background when they stop. I think something like this would be fun and unique but still aligned with the site’s purpose. I definitely need to find that balance between interactivity and a clean, professional feel.
I was also encouraged to explore the 'About' section more and look for interactive design elements to make it resonate with users—something beyond just a basic bio. One suggestion was to combine the 'About' with my resume, which could make it more dynamic. The 'About' section does feel plain right now, so I see the potential to make it more engaging. My only concern with combining my resume is making sure it still looks professional for employers. I’m not entirely sure how to balance that yet, but I’ll work on making it a space where people actually enjoy learning about me and my work.

## Milestones

My plan for implementation is to get the basics of the portfolio set up first before adding any interactive components. I think this approach will work well, but it means I need to plan carefully and know exactly what I’m doing upfront, so I’ll make sure to do that. Starting with the basics lets me focus on polishing and prioritizing the core content of the portfolio before jumping into the 'fancier' interactive elements.

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [ ] Set Up Website Basis
  - [ ] Create main navigation layout

- [ ] Week 11 Nov 11 \- Nov 15: 
  - [ ] Finalize Project Information Pages 
  - [ ] Explore interactive Design Ideas
  
  
- [ ] Week 12 Nov 18 \- Nov 22:
  - [ ] FP3 due   
  - [ ] Add User-Interactive Elements
  - [ ] Refine Navigation

- [ ] Week 13 Nov 25 \- Nov 29:  
  - [ ] Thanksgiving  
  - [ ] Conduct Usability Tests 
  - [ ] Adjust Based on Feedback
  
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due 
  - [ ] Final Refinements
  - [ ] Final Review



## Generative AI Use Plan

For this project, I think generative AI tools would be especially helpful when I need to understand how a specific library works or when I’m integrating something with an unfamiliar language. AI could definitely come in handy for support with these libraries, especially if there aren’t many resources available online. I use ChatGPT normally when it comes to generative AI tools, and I assume it will be reliable for breaking down libraries and helping me integrate them when needed. To use generative AI responsibly, I just need to make sure I’m using it as a learning aid or support tool rather than relying on it just to give me direct solutions.

---

# **FP1 \- Proposal for Critique**

## *Idea 1*

![Personal Portfolio](images/idea1.png)

I want to create a personal portfolio to show off my design projects and creative process and use it for job applications, but also   to have a compilation of my works. I want to make it interactive and fun, with customizable interfaces, such as animations that users can adjust themselves. I want to keep the portfolio accessible by making sure everything’s clear and easy to navigate. Mostly, I want it to show off the different range of projects I’ve done and give a peek into the ideas behind them.

## *Idea 2*

![Virtual Pet Simulator](images/idea2.png)

I want to build a virtual pet simulator for a fun experience that users can simply enjoy. I’m plan to make it interactive, where the pet reacts based on what you do with it, showing different moods or actions. I’ll keep it simple and accessible, with visuals that are easy to follow and clear instructions. The main component is just to have a playful experience, taking care of a cute, digital pet you can hang out with.

## *Idea 3*

![Personality Test](images/idea3.png)

I want to design a personality test that helps people discover insights about their personality traits. It’ll be interactive by asking questions that feel engaging and require some thought. I want to make sure that everything flows nicely so it’s smooth from start to finish, and then at the end, you’ll get a summary and representation of your personality type, giving people a way to explore who they are in a fun, casual way.

## Feedback Summary

In the lab session, I received some really helpful critiques on how to approach better the design of the websites I had in mind. First, I was advised to think carefully about the visual identity of each of my ideas. The suggestion was to make sure I have a clear vision of the aesthetic for each theme so that I can build interactions that make sense for the overall look and feel of my site. Knowing the aesthetics I want will, in turn, help me build cohesive user experiences as to the intended purpose behind my ideas, ensuring that the interactions I include feel intentional and actually enhance the content.
Another point was to spend some time exploring examples of existing websites to gather inspiration for the ideas I had. I was encouraged to look at different interactive sites to see how they utilized visual elements along with user engagement. By analyzing these references, I can get a better sense of what works and what doesn’t, or what I prefer or not, and draw from them to bring my ideas to life. Furthermore, to have a strong foundation of the interactions I want to include, I was recommended to build a mood board in order to lay out the overall imagery of the ideas I had in mind, to create these interactions that are engaging and aligned with the style I want to present.
A piece of critique that resonated a lot with me was the importance for me to ensure that the interactions I included would help to enhance the information I was attempting to convey rather than distract attention from it. This advice was important to me to hear as it reminded me that design should be purposeful. The interactive elements I include with my website should have a reason, which is to make the content I am conveying clear, engaging, and memorable for the user.  

## Feedback Digestion

In digesting all the feedback I received in the lab, they all felt important for me to consider,  and I’m excited to act on them for my designs. The comment about defining a clear visual identity for each idea is definitely something I’ll work on and should start with. It’s easy for me to get caught up in the interactions themselves, which in turn deters from the original intents of the idea. Having a solid visual direction as a foundation will make sure that everything on the website flows and feels cohesive. I’m going to start this time by mood-boarding the aesthetics and vibes I want to go with for the idea I want to pursue, which should help me see what elements could become interactive and what could enhance the user’s experience.
The suggestion to look at examples of interactive websites for inspiration is also something I should explore. I think seeing how other sites handle interactions and engage users could be very inspiring and spark ideas I hadn’t even considered. Doing so will also help me identify what works in terms of usability and visual appeal so I can learn from this website while also putting my creative spin on things. Exploring different sites and building a mood board will not only refine my vision but also let me learn effective, established techniques that already work.
Lastly, the advice to make sure my interactions actually enhance the information rather than distract from it is something I’ll keep top of mind. I always seem to consider the "wow factor" of interactions, so this critique really reminded me that there should be a balance. I want to give the user a great experience without losing the main point of the initial subject. Overall, these critiques were very insightful and are elements I will incorporate in my next design.


