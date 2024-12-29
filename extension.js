const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
  // 3. Optionally, in desktop: if the above web approach doesn't work,
  //    the user might still need the font installed locally. This at least
  //    tries to load it in a background webview.

  // This extension doesn't need to do anything else to activate.
}

function deactivate() {
  // Not needed for a theme extension
}

module.exports = {
  activate,
  deactivate
};
