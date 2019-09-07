---
layout: project
type: project
image: images/pokemonGone.png
title: PokemonGone
permalink: projects/pokemonGone
# All dates must be YYYY-MM-DD format!
date: 2018-05-02
labels:
  - Java
  - GitHub
summary: A game developed for ICS 211.
---

<img class="ui image" src="{{ site.baseurl }}/images/GUI.png">

PokemonGone is my final project for ICS 211. This object-oriented project integrates many of the essential contents covered in ICS 211. Each pokemon in this game has its class file.

In this game, the player is a pokemon trainer. The player can catch wild pokemon and fight against other pokemon trainers. The general idea of this game is based on the Pokemon series.

Here is a part of my source code: 

```Java
   /**
   * private set method for new hit points and combat power
   * when the pokemon levels up.
   */
   public void powerUp() {
      this.hitPnts = (int) (this.hitPnts + 1.15 + (0.2 * this.hitPnts));
      Random rGen = new Random();
      double multiplier = 1.0 + 2.0 * rGen.nextDouble();
       
      int cp = (int) (this.hitPnts * multiplier);
      if (cp >= this.comPwr) {
         this.comPwr = cp;
      }
   } 

```

