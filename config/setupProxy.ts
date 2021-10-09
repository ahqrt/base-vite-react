import { ProxyOptions } from 'vite'

const proxy: Record<string, string | ProxyOptions> = {
    '/api': {
        target: 'xxxxxxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
    }
}

export default proxy