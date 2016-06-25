/*
 * #%L
 * AEM Chrome Plug-in
 * %%
 * Copyright (C) 2016 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

var s = document.createElement('script');
s.src = chrome.extension.getURL('afCustomScript.js');
(document.head || document.documentElement).appendChild(s);

window.addEventListener('af-editor-loaded.afPlugin', function (e) {
    chrome.runtime.sendMessage({url: window.location.href , action: "af-editor-loaded"}, function(response) {
        console.log(response);
    });
});