import { Plugin } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VITE_APP_ESLINT, VITE_APP_VISUALIZER } from '../index'
import configureVisualizerConfig from './visualizer'
import configEslint from './eslint'

export default function createVitePlugin() {
  const vitePlugins: (Plugin | Plugin[])[] = [reactRefresh()]
  VITE_APP_VISUALIZER && vitePlugins.push(configureVisualizerConfig())
    VITE_APP_ESLINT && vitePlugins.push(...configEslint())
  return vitePlugins
}
