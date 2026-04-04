const nextConfig = require('./next.config.js');
let conf = typeof nextConfig === 'function' ? nextConfig() : nextConfig;
if (conf instanceof Promise) {
    conf.then(c => console.dir(c, {depth: null}));
} else {
    console.dir(conf, {depth: null});
}
