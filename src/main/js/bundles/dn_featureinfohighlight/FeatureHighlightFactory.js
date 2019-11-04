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
export default class FeatureInfoHighlighter {

    activate() {
        this._getView().then((view) => {
            this.watchPopup(view);
        });
    }

    _getView() {
        const mapWidgetModel = this._mapWidgetModel;
        return new Promise((resolve, reject) => {
            if (mapWidgetModel.view) {
                resolve(mapWidgetModel.view);
            } else {
                mapWidgetModel.watch("view", ({value: view}) => {
                    resolve(view);
                });
            }
        });
    }

    watchPopup(view) {
        let drawGeometryHandler = this._drawGeometryHandler;
        view.popup.watch("selectedFeature", (selectedFeature) => {
            if (view.popup.visible && selectedFeature) {
                drawGeometryHandler.onPopupOpen(selectedFeature);
            } else {
                drawGeometryHandler.clearGraphics();
            }
        });
        view.popup.watch("visible", () => {
            if (!view.popup.visible) {
                drawGeometryHandler.clearGraphics();
            }
        });
    }
}
