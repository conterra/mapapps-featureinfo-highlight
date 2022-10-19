# Featureinfo Highlight
This bundle highlights the geometry of a feature whose information is displayed in a popup.

## Usage

1. First you need to add the bundle dn_featureinfohighlight to your app.
2. No further configuration is required, but you can change the highlight symbols in the app.json.

## Configuration Reference

### DrawGeometryHandler

```json
"dn_featureinfohighlight": {
    "DrawGeometryHandler": {
        "pointSymbol": {
            "type": "simple-marker",
            "style": "circle",
            "size": 12,
            "color": [
                0,
                255,
                255,
                0.25
            ],
            "outline": {
                "style": "solid",
                "width": 2,
                "color": [
                    0,
                    255,
                    255,
                    1
                ]
            }
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
                "width": 2,
                "style": "solid",
                "color": [
                    0,
                    255,
                    255,
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
