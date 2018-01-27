require.config({ paths: { 'vs': '/js/lib/vs' }});
require(['/js/lib/vs/editor/editor.main'], function() {
    var editor = monaco.editor.create(document.getElementById('container'), {
        value: [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
        ].join('\n'),
        language: 'javascript'
    });
});