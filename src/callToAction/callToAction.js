import CallToActionEditing from './callToActionEditing'
import CallToActionUI from './callToActionUI'
import { Plugin } from '@ckeditor/ckeditor5-core';

export default class CallToAction extends Plugin {
    static get requires() {
        return [ CallToActionEditing, CallToActionUI ];
    }
}
