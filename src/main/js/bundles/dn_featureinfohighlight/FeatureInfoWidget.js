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
    "dojo/_base/array",

    "ct/_when",
    "ct/async",

    "featureinfo/FeatureInfoWidget"
], function (declare, d_array,
             ct_when, ct_async,
             FeatureInfoWidget) {
    return declare([], {
        activate: function () {
            this.inherited(arguments);
            var featureInfoWidget = FeatureInfoWidget;
            featureInfoWidget.prototype._processNextQuery = this._processNextQuery;
        },
        _processNextQuery: function () {
            if (this._destroyed) {
                return;
            }
            var index = this._currentQueryIndex++;
            var queryResults = this.queryResults;
            if (index >= queryResults.length) {
                this._queriesProcessed = true;
                this._hideProgressBar();
                this._checkForEmptyResult();
                var layerBox = this.selectLayerBox;
                var layerIndex = layerBox ? layerBox.get("value") : -1;
                if (layerIndex > -1 && layerIndex !== "") {
                    ct_async(this._onLayerSelectBoxChange, this, 0, layerIndex);
                }
                // stop any further processing
                return;
            }
            var currentQuery = this.queryResults[index];
            var layerTitle = currentQuery.layerTitle;
            this._updateProgressBar(layerTitle, index);
            var layerFeatureCount = this.layerFeatureCount;
            var queryOpts = layerFeatureCount > 0 ? {
                count: layerFeatureCount
            } : {};
            ct_when(currentQuery.executeQuery(queryOpts), function (result) {
                if (this._destroyed) {
                    return;
                }
                currentQuery.result = result;
                // add the geometry to the features in result
                if (this.geometry) {
                    d_array.forEach(result, function (feature) {
                        feature.trueGeometry = feature.geometry;
                        feature.geometry = this.geometry;
                    }, this);
                }
                this._addResultToLayerSelectBox(index, result, layerTitle);
                this._processNextQuery();
            }, function (e) {
                currentQuery.result = [];
                currentQuery.error = e;
                this._handleError(e);
                this._processNextQuery();
            }, this);
        }
    });
});