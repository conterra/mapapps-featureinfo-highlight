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
        let mapWidgetModel = this._mapWidgetModel;
        if (mapWidgetModel.view) {
            this.watchPopup(mapWidgetModel.view);
        } else {
            mapWidgetModel.watch("view", (view) => {
                if (view.value) {
                    this.watchPopup(view.value);
                }
            });
        }
    }

    watchPopup(view) {
        let drawGeometryHandler = this._drawGeometryHandler;
        view.popup.watch("visible", () => {
            if (view.popup.visible && view.popup.features.length !== 0) {
                drawGeometryHandler.onPopupOpen(view.popup.features[0]);
                view.popup.watch("selectedFeature", (selectedFeature) => {
                        if (selectedFeature) {
                            drawGeometryHandler.onPopupOpen(selectedFeature);
                        }
                    }
                );
            } else {
                drawGeometryHandler.clearGraphics();
            }
        });
    }
}
