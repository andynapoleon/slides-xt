import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import {prexample} from './src/scripts/prexample.js'

export default {
    // base: 'https://uofa-cmput404.github.io/slides-xt/',
    base: '/slides-xt/',
    build: {
        minify: false,
        rollupOptions: {
            output: {
                preserveModules: true,
                compact: false,
                minifyInternalExports: false,
            },
            preserveEntrySignatures: "exports-only",
            plugins: [false],
        },
        sourcemap: true,
    },
    optimizeDeps: {
        disabled: true,
    },
    plugins: [
        vituum({
            pages: {
                normalizeBasePath: true,
            }
        }),
        nunjucks({
            root: './src',
            filters: {
                prexample
            },
            options: {
                autoescape: true,
            }
        })
    ]
}