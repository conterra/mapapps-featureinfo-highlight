# FeatureInfo Highlight
This bundle highlights features for which a pop up was opened.

When using map.apps line 4 it is only needed when creating apps with MapServer Layers but not when using WebGL rendering and Feature Layers.

Sample App
------------------
https://demos.conterra.de/mapapps/resources/apps/downloads_featureinfo_highlight4/index.html

![Screenshot Highlight Sample App](https://github.com/conterra/mapapps-featureinfo-highlight/blob/master/highlighter.JPG)

Installation Guide
------------------
In order to use the "dn_featureinfohighlight" bundle, simply add it to your app - no further configuration is required.

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`

