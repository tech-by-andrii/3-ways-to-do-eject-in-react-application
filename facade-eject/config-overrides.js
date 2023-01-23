/* config-overrides.js */

module.exports = function override(config, env) {
    console.log('config', config);
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.resolve.alias,
            "react-native-svg": "react-native-svg-web",
        }
    }

    return config;
}
