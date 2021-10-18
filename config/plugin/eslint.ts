import checker from 'vite-plugin-checker'

export default function configEslint() {
    return [
        checker({
            typescript: true,
            eslint: {
                files: ['./src'],
                extensions: ['.ts', '.tsx', '.jsx']
            }
        })
    ]
}
