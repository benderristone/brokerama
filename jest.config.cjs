module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.svelte$': ['svelte-jester', {"preprocess": true}],
        '^.+\\.js$': 'babel-jest',
        "^.+\\.ts$": "ts-jest"
    },
    moduleFileExtensions: ['js', 'svelte', 'ts'],
}
