/*
 * Copyright (C) 2021 con terra GmbH (info@conterra.de)
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
import Observers from "apprt-core/Observers";

const _observers = Symbol("_observers");

export default class FeatureInfoHighlighter {

    activate() {
        this[_observers] = Observers();
        this._getView().then((view) => {
            this.watchPopup(view);
        });
    }

    deactivate() {
        this._drawGeometryHandler.clearGraphics();
        this[_observers].clean();
    }

    _getView() {
        const mapWidgetModel = this._mapWidgetModel;
        return new Promise((resolve, reject) => {
            if (mapWidgetModel.view) {
                resolve(mapWidgetModel.view);
            } else {
                const watcher = mapWidgetModel.watch("view", ({value: view}) => {
                    watcher.remove();
                    resolve(view);
                });
            }
        });
    }

    _checkForHighlight(popup) {
        let drawGeometryHandler = this._drawGeometryHandler;
        if (popup.visible && popup.selectedFeature) {
            drawGeometryHandler.onPopupOpen(popup.selectedFeature);
        } else {
            drawGeometryHandler.clearGraphics();
        }
    }

    watchPopup(view) {
        this[_observers].add(view.popup.watch("selectedFeature", () => {
            this._checkForHighlight(view.popup);
        }));
        this[_observers].add(view.popup.watch("visible", () => {
            this._checkForHighlight(view.popup);
        }));
    }
}
