import { BuildOptions } from 'vite'
import { VITE_APP_CONSOLE, VITE_APP_DEBUGGER, VITE_APP_SOURCEMAP } from '../config'

const build: BuildOptions = {
    terserOptions: {
        compress: {
            keep_infinity: true,
            drop_console: VITE_APP_CONSOLE,
            drop_debugger: VITE_APP_DEBUGGER
        }
    },
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: VITE_APP_SOURCEMAP
}

export default build