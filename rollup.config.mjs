import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import { globSync } from 'glob';
import { fileURLToPath } from 'node:url';
import path from "path"
import fs from "fs"

function copyFiles(from_to) {
    return {
        name: 'copy-files',
        generateBundle() {
            from_to.forEach(([from_glob, target_location, options]) => {
                globSync(from_glob, options).map(file => {
                    let to = path.join(target_location, path.relative(options.cwd, file));
                    let dir = path.dirname(to);
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    fs.copyFileSync(
                        file,
                        to
                    );
                })
            })
        }
    }
}


function globToRollupInput(globPattern) {
    return globSync(globPattern).map(file => fileURLToPath(new URL(file, import.meta.url)))
}

export default {
    input: "index.ts",
    plugins: [
        typescript(),  // allows Rollup to convert TypeScript to JavaScript
        json(),  // convert json to js (contracts.json)
        resolve(),  // to find node modules dependencies
        commonjs(),  // to convert node module stuff to ES modules
        copyFiles([
            ["*/artifacts/contracts/**/*.json", "dist/", { cwd: path.dirname(import.meta.url) }]
        ])
    ],
    // external requirements and local files that shoul not be bundled - abis
    external: [
        ...globToRollupInput('*/artifacts/contracts/**/*.json'),
    ],
    // cjs is for Node
    output: {
        dir: "dist",
        format: "cjs",
        sourcemap: true
    }
}
