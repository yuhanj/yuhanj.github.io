---
layout: project
type: project
image: images/beyond-the-library.png
title: Beyond the Library
permalink: projects/btl
# All dates must be YYYY-MM-DD format!
date: 2019-12-18
labels:
  - Software Engineering
  - Web Application
  - User Interface
  - Group Project
  - Javascript
  - React
  - MongoDB
  - Meteor
summary: A Web Application that helps UHM students find study spots.
---
<h2>What is Beyond the Library?</h2>
Beyond The Library is my final group project for ICS 314. It is a web application that helps students at the University of Hawaii at Manoa to find a place to study. Many students prefer the library in UHM; however, sometimes the library gets full, and students may feel lost. We want to help them explore other study spots. 

[Organization Page](https://beyond-the-library.github.io/)
<img class="ui image" src="{{ site.baseurl }}/images/btl-landing.png">

<h2>My Role</h2>
In this project, I was in charge of the back end of all the spots. I constructed the spots' collection that contains all the essential attributes. The spots' collection was used to create, update, and maintain all the study spots. The spots' collection has GPS coordinates of each spot for the map page. Besides, I used status attributes to markup which pages should appear to the public. I also helped my team export data from the  MongoDB for their pages.

I made MySpots page for users to contribute their spots. I also designed an alternative card layout for users to manage all the spots quickly. Users would have limited access to the spots; they could not edit other users' spots or publish spots. Only the administrator could publish spots and manage all the spots. Designing the logic of the appearance of various buttons and the status of spots was an exciting challenge.
<img class="ui image" src="{{ site.baseurl }}/images/btl-allspots.png">

For milestone 3, I spent most of the time on adding more functionality to the project. I helped my team to integrate all the modules with internal links and redirection. For instance, users could click on a spot and enter its location page; they could also click on a pin on the map to see more details and comments. 

Based on the feedback from our testing users, I added several buttons and pop-up alerts with links to help users keep track of a designed pathway. For example, I modified the add spot function to be three-steps. The user could fill in some necessary information about the spot and quit; otherwise, they could also go ahead and fill in more details.
