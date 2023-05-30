# FeatureInfo Highlight
⚠️ This bundle is no longer needed in map.apps 4.15 or later.

This bundle highlights the geometry of a feature whose information is displayed in a popup.

![Screenshot Highlight Sample App](https://github.com/conterra/mapapps-featureinfo-highlight/blob/master/screenshot.JPG)

When using map.apps line 4 it is only needed when creating apps with MapServer Layers but not when using WebGL rendering and Feature Layers.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_featureinfo_highlight4/index.html

## Build Status
[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-featureinfo-highlight/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-featureinfo-highlight/actions/workflows/devnet-bundle-snapshot.yml)

## Installation Guide
In order to use the "dn_featureinfohighlight" bundle, simply add it to your app - no further configuration is required.

[dn_featureinfohighlight Documentation](https://github.com/conterra/mapapps-featureinfo-highlight/tree/master/src/main/js/bundles/dn_featureinfohighlight)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to define the mapapps.remote.base property.
1. Goal parameters
   `mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
   Change the mapapps.remote.base in the build.properties file and run:
   `mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
