# FeatureInfo Highlight
This bundle highlights features for which a pop up was opened.

When using map.apps line 4 it is only needed when creating apps with MapServer Layers but not when using WebGL rendering and Feature Layers.

Sample App
------------------
https://demos.conterra.de/mapapps/resources/apps/downloads_featureinfo_highlight4/index.html

![Screenshot Highlight Sample App](https://github.com/conterra/mapapps-featureinfo-highlight/blob/master/screenshot.JPG)

Installation Guide
------------------
In order to use the "dn_featureinfohighlight" bundle, simply add it to your app - no further configuration is required.

If you would like to configure the colors of the highlights add the following configuration to your app.json 

    "dn_featureinfohighlight": {
            "DrawGeometryHandler": {
            "polygonStyle": {
                                    "color": [red, green, blue, transparency (of fill color)],
                                    "style": "solid",
                                    "outline": {
                                        "color": [red, green, blue, transparency (of fill color)],
                                        "width": 0.75,
                                        "style": "solid"
                                    }
                                },
                                "pointStyle": {
                                    "color": [red, green, blue, transparency (of fill color)],
                                    "angle": 0,
                                    "xoffset": 0,
                                    "yoffset": 0,
                                    "size": 12,
                                    "style": "circle",
                                    "outline": {
                                        "color": [red, green, blue, transparency (of fill color)],
                                        "width": 0.75,
                                        "style": "solid"
                                    }
                                },
                                "polylineStyle": {
                                    "color": [red, green, blue, transparency (of fill color)],
                                    "style": "solid",
                                    "width": 0.75
                                }
                            }
            }
        },
        
The default values for the colors are:
 
##### Properties
| Property                       | Type    | Possible Values                 | Default                         | Description                          |
|--------------------------------|---------|---------------------------------|---------------------------------|--------------------------------------|
| polygonStyle.color             | Array   | 4 entries 0-255                 | [0, 255, 255, 0.25]             | Defines the fill color with RGBA, for more information see https://developers.arcgis.com/javascript/3/jsapi/color-amd.html                        |
| polygonStyle.style             | String  | backward-diagonal', 'cross', 'diagonal-cross', 'forward-diagonal', 'horizontal', 'none', 'solid', 'vertical'   | 'solid'                     | Fill style of the polygon              |
| polygonStyle.outline.color               | Array | 4 entries 0-255   | [0, 0, 0, 1]                      | Defines color of outline |
| polygonStyle.outline.width | double |    | 0.75                      | Defines width of outline          |
| polygonStyle.outline.style                  | String | 'dash', 'dash-dot', 'dot', 'inside-frame', 'long-dash', 'long-dash-dot', 'long-dash-dot-dot', 'none', 'short-dash', 'short-dash-dot', 'short-dash-dot-dot', 'short-dot', 'solid'   | 'solid'                      | Style of outline                    |
| pointStyle.color                | Array | 4 entries 0-255   | [0, 255, 255, 0.25]                      | Defines the fill color with RGBA, for more information see https://developers.arcgis.com/javascript/3/jsapi/color-amd.html                   |
| pointStyle.angle                 | Integer | 0-360   | 0                   | The angle of the marker relative to the screen in degrees.                      |
| pointStyle.xoffset                | Integer |    | 0                    | The offset on the x-axis in points.                     |
| pointStyle.yoffset               | Integer  |                                 | 0              | The offset on the y-axis in points.                   |
| pointStyle.size             | Integer  |                                 | 12 | The size of the marker in points.                |
| pointStyle.style             | String  | 'circle', 'cross', 'diamond', 'path', 'square', 'triangle', 'x'     | 'circle' | The size of the marker in points.                |
| pointStyle.outline.color               | Array | 4 entries 0-255   | [0, 0, 0, 1]                      | Defines the color of outline. When marker symbol style is cross or x it defines the overall color of the symbol. |
| pointStyle.outline.width | double |    | 0.75                      | Defines width of outline          |
| pointStyle.outline.style                  | String | 'dash', 'dash-dot', 'dot', 'inside-frame', 'long-dash', 'long-dash-dot', 'long-dash-dot-dot', 'none', 'short-dash', 'short-dash-dot', 'short-dash-dot-dot', 'short-dot', 'solid'   | 'solid'                      | Style of outline                    |
| polylineStyle.color             | Array   | 4 entries 0-255                 | [0, 255, 255, 0.25]             | Defines the fill color with RGBA, for more information see https://developers.arcgis.com/javascript/3/jsapi/color-amd.html                        |
| polylineStyle.style             | String  | backward-diagonal', 'cross', 'diagonal-cross', 'forward-diagonal', 'horizontal', 'none', 'solid', 'vertical'   | 'solid'                     | Fill style of the polygon              |
| polylineStyle.width             | double |    | 0.75                      | Defines width of outline          |


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

