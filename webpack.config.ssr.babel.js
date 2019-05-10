
import merge from 'webpack-merge';
import base from './webpack.config.babel';

const ssrConfig = {
  target: 'node',
  output: {
    filename: 'ssr.js',
  },
}

const mergedConfig = merge(base, ssrConfig);
export default mergedConfig