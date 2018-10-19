export function bar() {
    console.log('Hello there!');
}

export function defaultParameters(height, color = '#FF0000') {
    console.log('Default parameters', height, color);
}