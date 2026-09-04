# Pega Constellation Custom UI Gallery

Welcome to the **Pega Constellation Custom UI Gallery**. This repository contains a collection of custom Constellation DX components built to extend the native capabilities of Pega Platform and Pega Launchpad.

These components adhere strictly to the Cosmos React design system, ensuring a seamless, modern, and accessible user experience across all Pega applications.

---

## 🎨 Live Demo (Storybook)

You can interact with and preview all the custom components in this repository without needing to deploy them to a Pega environment. We use Storybook to provide an interactive playground.

👉 **[View the Live Component Gallery Here](https://sandeep-ghosh.github.io/firstdxcomponent)**

---

## 🧩 Featured Components

### 1. Signature Capture

A comprehensive e-signature field component that allows users to seamlessly sign documents and forms.

- **Draw Mode:** Freehand gesture capture using a smooth HTML5 Canvas.
- **Type Mode:** Allows users to type their name and preview it in 5 popular cursive web fonts (Caveat, Dancing Script, Pacifico, Great Vibes, Satisfy).
- **Customization:** Let users customize their pen/font color seamlessly.
- **Output:** Generates a reliable Base64 image payload ready to be saved into your Pega data model.

---

## 🚀 Getting Started (Local Development)

If you'd like to clone this repository and run the gallery locally to make your own modifications:

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/firstdxcomponent.git
   cd firstdxcomponent
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Local Demo

To start the local Storybook server and view the components:

```bash
npm run startStorybook
```

This will open the gallery at `http://localhost:6040`.

---

## 🛠 Building & Publishing to Pega

To publish a component to your Pega environment:

1. Authenticate with your Pega server:
   ```bash
   npm run authenticate
   ```
2. Build and publish all components:
   ```bash
   npm run publishAll
   ```
   _(Or use `npm run publish` to publish a specific component)._

---

## 📖 Pega Guidelines & Best Practices

- **Launchpad Safe:** Components are designed using `getMappedKey` and core `PConnect` APIs to ensure they operate seamlessly on both Pega Platform and Pega Launchpad.
- **Cosmos Native:** UI layouts use `@pega/cosmos-react-core` components (`Flex`, `FormField`, `RadioButtonGroup`, etc.) rather than third-party UI libraries, guaranteeing they inherit the exact theming and accessibility rules of your Pega application.

_(For detailed internal guidelines, please refer to the `Component_Build_Guide.md` and `AGENTS.md` files included in the repo)._
