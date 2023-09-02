import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import CallToAction from './callToAction/callToAction';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { Link } from '@ckeditor/ckeditor5-link';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic, CallToAction, Link ],
        toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList', 'link', '|', 'callToActionBtn' ],
        link: {
            defaultProtocol: 'https://'
        }
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );

        CKEditorInspector.attach( 'editor', editor );

        window.editor = editor;
    } )
    .catch( error => {
        console.error( error.stack );
    } );
