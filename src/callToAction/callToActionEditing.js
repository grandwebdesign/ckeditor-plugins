import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget, toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget';
import InsertCallToActionCommand from './insertCallToActionCommand';

export default class CallToActionEditing extends Plugin {
    static get requires() {
        return [ Widget ];
    }

    init() {
        console.log( 'CallToActionEditing#init() got called' );

        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add('insertCallToAction', new InsertCallToActionCommand(this.editor));
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('callToAction', {
            inheritAllFrom: '$blockObject'
        });

        schema.register('callToActionLeft', {
            isLimit: true,
            allowIn: 'callToAction'
        });

        schema.register('callToActionRight', {
            isLimit: true,
            allowIn: 'callToAction'
        });

        schema.register('callToActionTitle', {
            isLimit: true,
            allowIn: 'callToActionLeft',
            allowContentOf: '$block'
        });

        schema.register('callToActionText', {
            isLimit: true,
            allowIn: 'callToActionLeft',
            allowContentOf: '$block'
        });

        schema.register('callToActionButton', {
            isLimit: true,
            allowIn: 'callToActionRight',
            allowContentOf: '$block',
            allowAttributes: ['linkHref']
        })
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement({
            model: 'callToAction',
            view: {
                name: 'div',
                classes: 'call-to-action'
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'callToAction',
            view: {
                name: 'div',
                classes: 'call-to-action'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'callToAction',
            view: (modelElement, { writer: viewWriter }) => {
                const section = viewWriter.createContainerElement('div', { class: 'call-to-action' });

                return toWidget(section, viewWriter, { label: 'Call To Action Widget' });
            }
        });

        conversion.for('upcast').elementToElement({
            model: 'callToActionLeft',
            view: {
                name: 'div',
                classes: 'call-to-action__left'
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'callToActionLeft',
            view: {
                name: 'div',
                classes: 'call-to-action__left'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'callToActionLeft',
            view: (modelElement, { writer: viewWriter }) => {
                const section = viewWriter.createContainerElement('div', { class: 'call-to-action__left' });

                return toWidget(section, viewWriter, { label: 'Call To Action Widget Left' });
            }
        });

        conversion.for('upcast').elementToElement({
            model: 'callToActionRight',
            view: {
                name: 'div',
                classes: 'call-to-action__right'
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'callToActionRight',
            view: {
                name: 'div',
                classes: 'call-to-action__right'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'callToActionRight',
            view: (modelElement, { writer: viewWriter }) => {
                const section = viewWriter.createContainerElement('div', { class: 'call-to-action__right' });

                return toWidget(section, viewWriter, { label: 'Call To Action Widget Right' });
            }
        });

        conversion.for('upcast').elementToElement({
            model: 'callToActionTitle',
            view: {
                name: 'p',
                classes: 'mb-3'
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'callToActionTitle',
            view: {
                name: 'p',
                classes: 'mb-3'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'callToActionTitle',
            view: (modelElement, { writer: viewWriter }) => {
                const section = viewWriter.createEditableElement('p', { class: 'mb-3' });

                return toWidgetEditable(section, viewWriter);
            }
        });

        conversion.for('upcast').elementToElement({
            model: 'callToActionText',
            view: {
                name: 'p'
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'callToActionText',
            view: {
                name: 'p'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'callToActionText',
            view: (modelElement, { writer: viewWriter }) => {
                const section = viewWriter.createEditableElement('p');

                return toWidgetEditable(section, viewWriter);
            }
        });

        conversion.for('upcast').elementToElement({
            model: 'callToActionButton',
            view: {
                name: 'a',
                classes: 'call-to-action__button'
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'callToActionButton',
            view: {
                name: 'a',
                classes: 'call-to-action__button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'callToActionButton',
            view: (modelElement, { writer: viewWriter }) => {
                const section = viewWriter.createContainerElement('a', { class: 'call-to-action__button', href: '#' });

                return toWidgetEditable(section, viewWriter);
            }
        });
    }
}
