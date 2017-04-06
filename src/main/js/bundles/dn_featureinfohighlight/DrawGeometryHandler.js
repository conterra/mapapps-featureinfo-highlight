/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
    "dojo/_base/declare",
    "ct/mapping/edit/GraphicsRenderer",
    "esri/Color",
    "esri/geometry/Circle",
    "esri/geometry/Polygon",
    "esri/symbols/Font",
    "esri/symbols/TextSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol"
], function (declare, GraphicsRenderer, Color, Circle, Polygon, Font, TextSymbol, SimpleFillSymbol, SimpleLineSymbol) {
    return declare([], {
        activate: function () {
            this.graphicsRenderer = GraphicsRenderer.createForGraphicsNode("featureInfoHighlightGeometry", this._mapModel);
            this.graphicsRenderer.get("graphicsNode").set("renderPriority", 100);
            if (this.graphicsRenderer.get("hasNodeCreated")) {
                this._mapModel.fireModelStructureChanged({
                    source: this
                });
            }
        },
        drawGeometry: function (geometry) {
            var graphicsRenderer = this.graphicsRenderer;
            var feature = {
                geometry: geometry
            };
            if (geometry.type === "polygon" || geometry.type === "extent") {
                feature.symbol = this._getSymbolForPolygon();
            }
            graphicsRenderer.draw(feature);
            return feature;
        },
        clearGraphics: function () {
            var graphicsRenderer = this.graphicsRenderer;
            graphicsRenderer.clear();
        },
        _getSymbolForPolygon: function () {
            return new SimpleFillSymbol(
                SimpleFillSymbol.STYLE_SOLID,
                new SimpleLineSymbol(
                    SimpleLineSymbol.STYLE_SOLID,
                    new Color([255, 255, 0]),
                    3
                ),
                new Color([255, 255, 0, 0.1])
            );
        }
    });
});

