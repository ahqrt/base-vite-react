import { defineConfig } from 'vite'
import path from 'path'
import createVitePlugin from './config/plugin'
import cssOption from './config/style'
import { VITE_APP_BASE, VITE_APP_PORT, VITE_APP_OPEN} from './config/'
import proxy from './config/setupProxy'
import build from './config/build'
export default defineConfig((configEnv) => {
    return {
        plugins: createVitePlugin(),
        css: cssOption,
        base: VITE_APP_BASE,
        server: {
            host: true,
            port: VITE_APP_PORT,
            open: VITE_APP_OPEN,
            proxy: proxy,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        build: build
    }
})