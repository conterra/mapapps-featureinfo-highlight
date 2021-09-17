# FeatureInfo Highlight
This bundle highlights features which where selected by the FeatureInfo bundle.

This bundle is no longer needed for map.apps line 4 apps when using WebGL rendering and Feature Layers.

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

