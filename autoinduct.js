/**
 * Copyright 2022 Aigio1064
 * MIT license
*/
(function(){
    "use strict";
    // 资源列表
    let $resourcesList = {
        jquery: [
            "https://mirror.aigio1064.top/jquery/jquery.min.js", // 来自本储存库
            "https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js", // 来自https://www.jsdelivr.com/
            "https://unpkg.com/jquery@3.6.1/dist/jquery.min.js" // 来自https://unpkg.com/
        ],
        vue: [
            "https://mirror.aigio1064.top/vue/vue.min.js", // 来自本储存库
            "https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.min.js", // 来自https://www.jsdelivr.com/
            "https://unpkg.com/vue@2.7.13/dist/vue.min.js" // 来自https://unpkg.com/
        ],
        react: [
            "https://mirror.aigio1064.top/react/react.production.min.js", // 来自本储存库
            "https://cdn.jsdelivr.net/npm/react@18.2.0/cjs/react.production.min.js", // 来自https://www.jsdelivr.com/
            "https://unpkg.com/react@18.2.0/cjs/react.production.min.js" // 来自https://unpkg.com/
        ]
    };
    // 元素创建器 ↓ 此代码遵循 Apache 协议，原作者还是我，源在另一个库里
    function createNewElement(Parent, Element, Content, Attributes, Styles) {
        let $Element = document.createElement(Element);
        if (!!Content) {
            $Element.appendChild(document.createTextNode(Content));
        };
        if (!!Attributes) {
            Attributes.forEach($a => {
                if (RegExp("=").test($a)) {
                    let $b = $a.split("=");
                    $Element.setAttribute($b[0], $b[1]);
                } else {
                    let $b = document.createAttribute($a);
                    $Element.setAttributeNode($b)
                }
            });
        };
        if (!!Styles) {
            Styles.forEach($a => {
                if (RegExp("=").test($a)) {
                    let $b = $a.split("=");
                    $Element.setAttribute($b[0], $b[1]);
                } else {
                    let $b = document.createAttribute($a);
                    $Element.setAttributeNode($b)
                }
            });
        };
        document.querySelector(Parent).appendChild($Element);
    };
    // ↑ Apache license END
    // 检测需要的资源
    let $el = document.querySelector("[a-srclist]").getAttribute("a-srclist");
    if (RegExp("jquery","i").test($el)) {
        $resourcesList.jquery.forEach($a => {
            createNewElement("head","script","",["src="+$a])
        })
    };
    if (RegExp("vue","i").test($el)) {
        $resourcesList.vue.forEach($a => {
            createNewElement("head","script","",["src="+$a])
        })
    };
    if (RegExp("react","i").test($el)) {
        $resourcesList.react.forEach($a => {
            createNewElement("head","script","",["src="+$a,"crossorigin=\'\'"])
        })
    };
    // 释放变量
    $resourcesList = undefined;
    $el = undefined;
})()