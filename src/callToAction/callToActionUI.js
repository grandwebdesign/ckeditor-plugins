import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';

export default class CallToActionUI extends Plugin {
    init() {
        console.log( 'CallToActionUI#init() got called' );
        
        const editor = this.editor;
        const t = editor.t;

        editor.ui.componentFactory.add('callToActionBtn', locale => {
            const command = editor.commands.get('insertCallToAction');

            const buttonView = new ButtonView(locale);

            buttonView.set({
                label: t('Call To Action'),
                withText: true,
                tooltip: true
            });

            buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');
            this.listenTo(buttonView, 'execute', () => editor.execute('insertCallToAction'));

            return buttonView;
        } );
    }
}
