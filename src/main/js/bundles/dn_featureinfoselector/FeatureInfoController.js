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
    "dojo/_base/lang",
    "ct/_lang",
    "ct/_when",
    "featureinfo/FeatureInfoController"
], function (declare, d_array, d_lang, ct_lang, ct_when, FeatureInfoController) {
    return declare([], {
        activate: function () {
            this.inherited(arguments);
            var featureInfoController = FeatureInfoController;
            featureInfoController.prototype._createStoreQueries = this._createStoreQueries;
        },
        _createStoreQueries: function (storeInfos, query) {
            return d_array.map(storeInfos, function (storeInfo) {
                var queryItem = ct_lang.copyAllProps({}, storeInfo);
                queryItem.executeQuery = function (queryOpts) {
                    return ct_when(queryItem.idProperty, function (idProperty) {
                        queryItem.idProperty = idProperty;
                        queryOpts = d_lang.mixin({}, queryOpts || {});
                        queryOpts.fields = d_lang.mixin(queryOpts.fields || {}, {
                            geometry: true
                        });
                        return this.store.query(query, queryOpts);
                    }, this);
                };
                return queryItem;
            }, this);
        }
    });
});