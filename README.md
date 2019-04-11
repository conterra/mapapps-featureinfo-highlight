# FeatureInfo Highlight
This bundle highlights features for which a pop up was opened.

When using map.apps line 4 it is only needed when creating apps with MapServer Layers but not when using WebGL rendering and Feature Layers.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_featureinfo_highlight4/index.html

![Screenshot Highlight Sample App](https://github.com/conterra/mapapps-featureinfo-highlight/blob/master/screenshot.JPG)

## Installation Guide
In order to use the "dn_featureinfohighlight" bundle, simply add it to your app - no further configuration is required.

It is possible to configure the highlight symbols in the app.json.

### Configurable Components of dn_featureinfohighlight:
#### DrawGeometryHandler
```
"dn_featureinfohighlight": {
    "DrawGeometryHandler": {
        "pointSymbol": {
            "type": "simple-marker",
            "style": "circle",
            "color": [0, 255, 255, 0.25 ],
            "outline": {
                "style": "solid",
                "width": 0.5,
                "color": [
                    0,
                    0,
                    0,
                    1
                ]
            },
            "angle": 0,
            "size": 12,
            "xoffset": 0,
            "yoffset": 0
        },
        "polylineSymbol": {
            "type": "simple-line",
            "style": "solid",
            "width": 2,
            "color": [
                0,
                255,
                255,
                1
            ]
        },
        "polygonSymbol": {
            "type": "simple-fill",
            "style": "solid",
            "color": [
                0,
                255,
                255,
                0.25
            ],
            "outline": {
                "width": 0.5,
                "style": "solid",
                "color": [
                    0,
                    0,
                    0,
                    1
                ]
            }
        }
    }
}
```

More information about esri symbols:
https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html

To easily create your own symbols use the symbol playground:
https://developers.arcgis.com/javascript/latest/sample-code/playground/index.html

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
