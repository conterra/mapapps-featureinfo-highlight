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
import Graphic from "esri/Graphic";

export default class DrawGeometryHandler {

    drawGeometry(geometry) {
        let view = this._mapWidgetModel.get("view");

        let graphic = this.graphic = new Graphic({
            geometry: geometry
        });
        let properties = this._properties;
        switch (geometry.type) {
            case "point":
            case "multipoint":
                graphic.symbol = properties.pointSymbol;
                break;
            case "polyline":
                graphic.symbol = properties.polylineSymbol;
                break;
            case "polygon":
            case "extent":
                graphic.symbol = properties.polygonSymbol;
                break;
        }
        view.graphics.add(graphic);
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
}

