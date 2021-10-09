import { CSSOptions } from 'vite'

const cssOption : CSSOptions = {
    preprocessorOptions: {
        less: {
            javascriptEnabled: true,
            additionalData: '@import ./src/assets/less/varible.less; '
        }
    }
}

export default cssOption