echoLiveSystem.registry.loadRegistry('text_style', 'name', [
    {
        name: 'color',
        style: [
            'color',
            '--echo-span-color'
        ]
    }, {
        name: 'backgroundColor',
        style: 'background-color'
    }, {
        name: 'backgroundColor',
        style: 'background-color'
    }, {
        name: 'bold',
        class: 'echo-text-bold'
    }, {
        name: 'italic',
        class: 'echo-text-italic'
    }, {
        name: 'underline',
        class: 'echo-text-underline'
    }, {
        name: 'strikethrough',
        class: 'echo-text-strikethrough'
    }, {
        name: 'size',
        class: 'echo-text-size-{value}'
    }, {
        name: 'weight',
        class: 'echo-text-weight-{value}'
    }, {
        name: 'stretch',
        class: 'echo-text-stretch-{value}'
    }, {
        name: 'letterSpacing',
        class: 'echo-text-letter-spacing-{value}'
    }, {
        name: 'emphasis',
        class: 'echo-text-emphasis'
    }, {
        name: 'style',
        isStyle: true
    }
]);