const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './app/globals.css' })
///Users/dfranco/Desktop/Senior_project/CrowdSense/app/globals.css
