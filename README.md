# JakePixl's Personal Blog

Welcome to the repository for my personal blog hosted at [jakepixl.dev](https://jakepixl.dev). This project is built with Astro, focusing on performance, SEO, and a delightful reading experience.

## 🚀 Getting Started

To get started with the project, clone the repository and install the dependencies using `pnpm`.

```bash
pnpm install
```

## 🌐 Development

To start the development server, run the following command. This will make the site available on `localhost:4321`.

```bash
pnpm run dev
```

## 🏗️ Build

To build the project for production, use the following command. This will generate a static version of the site in the `./dist/` directory.

```bash
pnpm run build
```

## 🖥️ Preview

Before deploying your changes, you can preview the production build locally using:

```bash
pnpm run preview
```

## 📂 Project Structure

The project follows a standard Astro project structure:

```
/
├── public/
│   └── assets/ # Static assets like images
├── src/
│   ├── components/ # Reusable components
│   ├── layouts/ # Page layouts
│   └── pages/ # Blog posts and other pages
└── package.json
```

## 🛠️ Commands

Here's a quick rundown of the available commands:

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Installs dependencies                       |
| `pnpm run dev`   | Starts local dev server at `localhost:4321` |
| `pnpm run build` | Build your site to `./dist/`                |
| `pnpm run preview` | Preview your build locally                |