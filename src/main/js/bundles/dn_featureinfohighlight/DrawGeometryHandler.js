/*
 * Copyright (C) 2019 con terra GmbH (info@conterra.de)
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
import Color from "esri/Color";
import Graphic from "esri/Graphic";
import SimpleMarkerSymbol from "esri/symbols/SimpleMarkerSymbol";
import SimpleFillSymbol from "esri/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "esri/symbols/SimpleLineSymbol";

export default class DrawGeometryHandler {

    drawGeometry(geometry) {
        let view = this._mapWidgetModel.get("view");

        let graphic = this.graphic = new Graphic({
            geometry: geometry
        });
        view.graphics.add(graphic);

        switch (geometry.type) {
            case "polygon":
            case "extent":
                graphic.symbol = this._getSymbolForPolygon();
                break;
            case "point":
            case "multipoint":
                graphic.symbol = this._getSymbolForPoint();
                break;
            case "polyline":
                graphic.symbol = this._getSymbolForPolyline();
                break;
        }

    }

    onPopupOpen(geometry) {
        this.clearGraphics();
        this.drawGeometry(geometry);
        this.oldGraphic = this.graphic;
    }

    clearGraphics() {
        if (this.oldGraphic) {
            let view = this._mapWidgetModel.get("view");
            view.graphics.remove(this.oldGraphic);
        }

    }

    _getSymbolForPolygon() {
        return new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(
                SimpleLineSymbol.STYLE_SOLID,
                new Color([0, 255, 255]),
                3
            ),
            new Color([0, 255, 255, 0.1])
        );
    }

    _getSymbolForPoint() {
        return new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, this._properties.pointSymbolSize || 20,
            new SimpleLineSymbol(
                SimpleLineSymbol.STYLE_SOLID,
                new Color([0, 255, 255]),
                3
            ),
            new Color([0, 255, 255, 0.1])
        );
    }

    _getSymbolForPolyline() {
        return new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color([0, 255, 255]),
            3
        );
    }
}

