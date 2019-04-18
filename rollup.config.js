import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const BANNER = `/**
 * ${pkg.name}
 * ${pkg.homepage}
 *
 * @version ${pkg.version}
 * @license MIT
 * @copyright Dmitry Dudin <dima@nuware.ru> 2019
 */`

const INPUT = 'src/index.js'

const OUTPUT = {
  sourcemap: true,
  banner: BANNER
}

const EXTERNAL = []

const PLUGINS = []

const FORMATS = {
  esm: {
    external: EXTERNAL,
    output: Object.assign({
      file: pkg.module,
    }, OUTPUT),
    plugin: PLUGINS
  },
  cjs: {
    external: EXTERNAL,
    output: Object.assign({
      file: pkg.main,
    }, OUTPUT),
    plugins: PLUGINS
  },
  umd: {
    external: EXTERNAL,
    output: Object.assign({
      file: pkg.browser,
      name: 'nuware'
    }, OUTPUT),
    plugins: PLUGINS.concat([
      terser()
    ])
  }
}

const configuration = Object.keys(FORMATS).map((format) => {
  return {
    input: INPUT,
    external: FORMATS[format].external,
    output: Object.assign({
      format
    }, FORMATS[format].output),
    plugins: FORMATS[format].plugins
  }
})


export default configuration
