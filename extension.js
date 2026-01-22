const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Gotmpl Syntax Highlighter extension is now active!');

	// Show notification when extension is activated
	vscode.window.showInformationMessage('Gotmpl syntax highlighting is ready!');

	// Optional: Register a command to demonstrate extension is working
	let disposable = vscode.commands.registerCommand('gotmpl.showInfo', function () {
		vscode.window.showInformationMessage('Gotmpl syntax highlighting enabled for .gotmpl files');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {
	console.log('Gotmpl Syntax Highlighter extension has been deactivated');
}

module.exports = {
	activate,
	deactivate
}
