---
title: "ChunkVault Devlog #1: Where to begin?"
publishDate: "April 11 2023"
description: "A simple overview of the starting point and endgoal of chunkvault."
tags: ["rust", "devlog", "minecraft"]
draft: true
---

## ChunkVault?

If you're asking what ChunkVault is maybe you should checkout my [technical write-up](https://dev.to/valink/crafting-robust-minecraft-backup-tools-a-deep-dive-into-chunkvault-lite-and-teller-cli-16d1) on building the proof-of-concept version of the app, where I go over why I built it and the challanges that came along with it.

Otherwise i'll give you a short rundown here. The idea behind ChunkVault is for it to be the defacto choice for backing up Minecraft worlds; be it a local version or a server world hosted with friends, ChunkVault will be the answer.

## Where we start?

ChunkVault will be comprised of a main backend and a client application, the main backend will be served as an image that can be used by anyone to host their own private instance of ChunkVault, and the Teller will be a set of clients for use with the ChunkVault system to allow for backups.

### ChunkVault (the Backend)

The backend will be built using rust and actix along with surrealdb as the database. surrealdb is used to allow for use as an embedded database that can run along side our our backend in one image, meaning users wont have to setup external databases (if they dont want to that is).

### Teller (the Clients)

Teller isn't one tool is a set of clients that will be used in conjunction with the ChunkVault backend, these will come in the form of a Desktop application or CLI (command line interface), a Minecraft Server plugin, and potentially a Minecraft mod. Teller will also be a standalone tool this would allow for both manual backups/automatic backups of worlds both to another drive on the system or to the ChunkVault backend, making Teller itself a robust backup tool on it own.
