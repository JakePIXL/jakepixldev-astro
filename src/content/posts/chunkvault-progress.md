---
title: "Project Update: ChunkVault Progress"
publishDate: "July 31, 2023"
description: "Where is ChunkVault at? What's the plan? What's the future?"
image:
  url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fp652o795n56z.png&f=1&nofb=1&ipt=56852fa97cf6b01e1a4da30c258d50bc0f558a426164f584ff254405b7b2ed32&ipo=images"
  alt: "Minecraft Shaders Screenshot"
tags: ["rust", "tauri", "sveletekit", "actix", "minecraft"]
---

## Overview

I am currently dedicated to working on the ChunkVault ecosystem during every free hour outside of my regular work commitments. My primary focus has been on developing the vault backend, including essential functionalities like user authentication, backup creation, and download capabilities.

## Achievements

- **Backend Development:** I have made substantial progress in coding the bulk of the vault backend, which includes crucial features like the world creation and user authentication via OAuth 2.0. This allows users to log in, create backups, and download their saved data.
- **Public Repository:** In an effort to foster collaboration and transparency, I have made the Vault repository public. This move enables other developers to contribute to the project and track the progress of the final product.
- **API Development Expertise:** Through this project, I have acquired a deep understanding of developing APIs using Actix and Rust. This newfound knowledge has significantly boosted my confidence in completing the project successfully, which is a significant achievement for me and this project.

## Challenges

- **Handling Large Worlds:** One of the key challenges I'm currently facing is efficiently managing large worlds over 500MB in size. Implementing effective solutions for this issue is a priority to ensure smooth user experiences with large-scale Minecraft worlds. This is mostly due to my choice of the rust-s3 crate which is not as mature as I would like.
- **Quality of Life Fixes:** While the core functionalities are in place, I am actively working on implementing quality of life fixes to enhance the user experience. These improvements will contribute to a more polished and user-friendly ecosystem.
- **Administration Tools:** Developing administration tooling/dashboards for the vault backend is another challenge ive yet to tackle. This will be a significant focus once the core functionalities are in place.

## Upcoming Tasks

- **Teller Multitool:** I am currently focused on building the Teller Multitool, which will facilitate both local backups and backing up data to the vault backend. This tool will be instrumental in providing users with flexible backup options, which is a crucial aspect of the ChunkVault ecosystem and will be a significant focus once vaults upload functionality is complete.
- **Community Engagement:** In addition to working on the project's technical aspects, I plan to actively engage with the Minecraft community to gather feedback and insights. This will help me align the development process with the needs of the community and make the Minecraft experience better for everyone.

## Conclusion

Overall, I am making steady progress on the ChunkVault ecosystem, and the journey has been a significant learning experience. The backend development using Actix and Rust has provided me with newfound confidence in my abilities. With a public repository and plans for community engagement, I am excited to witness the project's growth and contribute to improving the Minecraft community.

## Links

Check out the following links for more information:

- [Vault Backend Git Repository](https://github.com/Valink-Solutions/vault)
- [ChunkVault Website](https://chunkvault.com)
- [Valink Solutions Website](https://valink.io)
