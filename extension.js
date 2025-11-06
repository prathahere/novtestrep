const vscode = require('vscode');

function activate(context) {
  console.log('Sample Extension is now active!');

  let disposable = vscode.commands.registerCommand('sampleExtension.helloWorld', function () {
    vscode.window.showInformationMessage('Hello from Sample VS Code Extension!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
