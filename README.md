# VSCode Sample Extension

This is a simple VS Code extension that adds a command to display a "Hello World" message.

## 🧩 Features

- Command: **Hello from Sample Extension**
- Shows a VS Code info message when executed.

## ▶️ Usage

1. Clone this repo:
   ```bash
   git clone https://github.com/yourusername/vscode-sample-extension.git
   ```
2. Open in VS Code.
3. Run the **Extension Development Host**:
   - Press `F5` to start debugging.
4. Open Command Palette (`Ctrl+Shift+P`) → search **Hello from Sample Extension**.

## 🛠️ Build & Package

To package your extension:
```bash
npm install -g vsce
vsce package
```

Upload the generated `.vsix` to the [VS Code Marketplace](https://marketplace.visualstudio.com/manage).

## 📄 License

MIT
