import { Command } from '@ckeditor/ckeditor5-core';

export default class InsertCallToActionCommand extends Command {
    execute() {
        this.editor.model.change( writer => {
            this.editor.model.insertObject(createCallToAction(writer));
        });
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'callToAction');

        this.isEnabled = allowedIn !== null;
    }
}

function createCallToAction( writer ) {
    const callToAction = writer.createElement('callToAction');
    const callToActionLeft = writer.createElement('callToActionLeft');
    const callToActionRight = writer.createElement('callToActionRight');
    const callToActionTitle = writer.createElement('callToActionTitle');
    const callToActionText = writer.createElement('callToActionText');
    const callToActionButton = writer.createElement('callToActionButton');

    writer.append(callToActionLeft, callToAction);
    writer.append(callToActionRight, callToAction);
    writer.append(callToActionTitle, callToActionLeft);
    writer.append(callToActionText, callToActionLeft);
    writer.append(callToActionButton, callToActionRight);

    writer.appendText('Title', callToActionTitle);
    writer.appendText('Text', callToActionText);
    writer.appendText('Button', callToActionButton);

    return callToAction;
}
