module.exports = {
    "preset": "rollup-jest",
    "moduleFileExtensions": [
        "js",
        "ts",
    ],
    "transform": {
        ".(ts|tsx)": "ts-jest"
    },
    "transformIgnorePatterns": [
        "/node_modules/", // defaults
        "\\.pnp\\.[^\\\/]+$", // defaults
        ".json"
    ]
};
