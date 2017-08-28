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
    "ct/_Connect",
    "featureinfo/FeatureInfoWidget"
], function (declare, _Connect, FeatureInfoWidget) {
    return declare([_Connect], {
        activate: function () {
            this.connect(FeatureInfoWidget.prototype, "_resolveFeatureContent", function (feature) {
                this._drawGeometryHandler.clearGraphics();
                var geometry = feature.trueGeometry;
                if (geometry && (geometry.type === "polygon" || geometry.type === "multipoint" || geometry.type === "point")) {
                    this._drawGeometryHandler.drawGeometry(geometry);
                }
            }, this);
            this.connect(this._contentViewer, "_displayWindow", function (widget, geometry, rule) {
                this._drawGeometryHandler.clearGraphics();
                if (geometry && (geometry.type === "polygon" || geometry.type === "multipoint" || geometry.type === "point")) {
                    this._drawGeometryHandler.drawGeometry(geometry);
                }
            }, this);
            this.connect(this._infoViewer, "onShowNewInfoWindow", function (e) {
                var infoWindow = this.infoWindow = e.infoWindow;
                this.con = this.connect(infoWindow.window, "onClose", function (event) {
                    this._drawGeometryHandler.clearGraphics();
                    this.con.disconnect();
                }, this);
            }, this);
        }
    });
});