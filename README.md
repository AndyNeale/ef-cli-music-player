# ef-cli-music-player

Solution to the E:Fundamentals Coding Challenge using Node.

# Prerequisites

This solution requires Node.js - if you don't already have this installed, go to https://nodejs.org/en/ and follow the instructions.

# Install

Clone the repository:

```
git clone https://github.com/AndyNeale/ef-cli-music-player
```

Install Node dependencies:

```
cd ef-cli-music-player
npm install
```

# Run

To run, either do this:

```
node index.js
```

or to install **climp** globally, do this:

```
npm install -g
climp
```

# Use

As per the instructions, the music player supports the following features:

## Play

A user can play a song using the command: **[USERNAME] play [SONG]**

e.g.

```
Mihai play Hard To Handle by The Black Crowes
Adrian play Hooked on a Feeling by Blue Swede
Adrian play Escape by Robert Holmes
```

## View

A user can view what another user listened to using the command: **[USERNAME]**

e.g.

```
$ Mihai

Listened to Hard To Handle by The Black Crowes

$ Adrian

Listened to Hooked on a Feeling by Blue Swede
Listened to Escape by Robert Holmes
```

## Follow

A user can follow another user using the command: **[USERNAME] follow [USERNAME]**

e.g.

```
Aymeric follow Mihai
```

## Activity

A user can see what other users they are following have listed to using the command: **[USERNAME] activity**

e.g.

```
$ Aymeric activity

Mihai listened to Hard To Handle by The Black Crowes

$ Aymeric follow Adrian
$ Aymeric activity

Adrian listened to Escape by Robert Holmes
Adrian listened to Hooked on a Feeling by Blue Swede
Mihai listened to Hard To Handle by The Black Crowes
```

# Test

To run unit tests:

```
npm test
```
