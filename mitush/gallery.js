let galleryContent = document.getElementById("galleryContentDiv");
window.onload = function () {
    let totalHTML = ``;
    //rings
    let ringHTML = `<div id="ringTab" class="tabContent">\n`;
    for (let i = 0; i < 8; i++) { //I know.. its hacky. adding b+i for generating proper script.
        let ring = `r${i}`;
        let url = `../resources/images/mitushImages/products/rings/r${i}.jpg`;
        ringHTML +=
            `<img id="productImage${ring}" class="galleryImage" src="${url}" onclick="galleryProductOn${ring}()" alt="${ring}.jpg">
             <div id="galleryOverlayOuterDiv${ring}" class="galleryOverlayOuterDivClass" onclick="galleryProductOff${ring}()">
                <div class="galleryOverlayInnerDiv">
                    <div id="galleryOverlayXButton1" class="galleryOverlayXButtonClass" onclick="galleryProductXOff${ring}()"><i class="fas fa-times "></i></div>
                    <div class="galleryOverlayLeftDiv">
                        <img id="galleryOverlayImageb${i}" class="galleryOverlayImageClass" src="${url}" alt="${ring}.jpg">
                    </div>
                    <div class="galleryOverlayRightDiv">
                        <p id="galleryOverlayDescription${ring}" class="galleryOverlayHeadClass">Ring ID - ${ring}</p>
                        <div class="galleryOverlayMarmeladaContactDiv">
                            <p class="aboutText">Like this one? Contact me for more information!</p>
                            <a id="galleryOverlayMarmeladaContactAnchor${ring}" class="galleryOverlayMarmeladaContactAnchorClass"
                                href="contact.html">
                                Contact
                            </a>    
                        </div>
                    </div>
                </div>
             </div>`;
        let script = document.createElement("script");
        script.text = `
                function galleryProductOn${ring}() {
                    document.getElementById("galleryOverlayOuterDiv${ring}").style.display = "block";
                }
                
                function galleryProductOff${ring}() {
                    document.getElementById("galleryOverlayOuterDiv${ring}").addEventListener("click", function (e) {
                        if (this === e.target) {
                            document.getElementById("galleryOverlayOuterDiv${ring}").style.display = "none";
                        }
                    });
                }
                
                function galleryProductXOff${ring}() {
                    document.getElementById("galleryOverlayOuterDiv${ring}").style.display = "none";
                }`;
        galleryContent.appendChild(script);
    }
    ringHTML += `</div>`
    totalHTML += ringHTML;

    //necklaces
    let necklacesHTML = `<div id="necklaceTab" class="tabContent">\n`;
    for (let i = 0; i < 8; i++) { //I know.. its hacky. adding b+i for generating proper script.
        let necklaces = `n${i}`;
        let url = `../resources/images/mitushImages/products/necklaces/n${i}.jpg`;
        necklacesHTML +=
            `<img id="productImage${necklaces}" class="galleryImage" src="${url}" onclick="galleryProductOn${necklaces}()" alt="${necklaces}.jpg">
             <div id="galleryOverlayOuterDiv${necklaces}" class="galleryOverlayOuterDivClass" onclick="galleryProductOff${necklaces}()">
                <div class="galleryOverlayInnerDiv">
                    <div id="galleryOverlayXButton1" class="galleryOverlayXButtonClass" onclick="galleryProductXOff${necklaces}()"><i class="fas fa-times "></i></div>
                    <div class="galleryOverlayLeftDiv">
                        <img id="galleryOverlayImageb${i}" class="galleryOverlayImageClass" src="${url}" alt="${necklaces}.jpg">
                    </div>
                    <div class="galleryOverlayRightDiv">
                        <p id="galleryOverlayDescription${necklaces}" class="galleryOverlayHeadClass">Necklace ID - ${necklaces}</p>
                        <div class="galleryOverlayMarmeladaContactDiv">
                            <p class="aboutText">Like this one? Contact me for more information!</p>
                            <a id="galleryOverlayMarmeladaContactAnchor${necklaces}" class="galleryOverlayMarmeladaContactAnchorClass"
                                href="contact.html">
                                Contact
                            </a>    
                        </div>
                    </div>
                </div>
             </div>`;
        let script = document.createElement("script");
        script.text = `
                function galleryProductOn${necklaces}() {
                    document.getElementById("galleryOverlayOuterDiv${necklaces}").style.display = "block";
                }
                
                function galleryProductOff${necklaces}() {
                    document.getElementById("galleryOverlayOuterDiv${necklaces}").addEventListener("click", function (e) {
                        if (this === e.target) {
                            document.getElementById("galleryOverlayOuterDiv${necklaces}").style.display = "none";
                        }
                    });
                }
                
                function galleryProductXOff${necklaces}() {
                    document.getElementById("galleryOverlayOuterDiv${necklaces}").style.display = "none";
                }`;
        galleryContent.appendChild(script);
    }
    necklacesHTML += `</div>`
    totalHTML += necklacesHTML;

    //bracelets
    let braceletHTML = `<div id="braceletTab" class="tabContent">\n`;
    for (let i = 0; i < 6; i++) { //I know.. its hacky. adding b+i for generating proper script.
        let bracelet = `b${i}`;
        let url = `../resources/images/mitushImages/products/bracelets/b${i}.jpg`;
        braceletHTML +=
            `<img id="productImage${bracelet}" class="galleryImage" src="${url}" onclick="galleryProductOn${bracelet}()" alt="${bracelet}.jpg">
             <div id="galleryOverlayOuterDiv${bracelet}" class="galleryOverlayOuterDivClass" onclick="galleryProductOff${bracelet}()">
                <div class="galleryOverlayInnerDiv">
                    <div id="galleryOverlayXButton1" class="galleryOverlayXButtonClass" onclick="galleryProductXOff${bracelet}()"><i class="fas fa-times "></i></div>
                    <div class="galleryOverlayLeftDiv">
                        <img id="galleryOverlayImageb${i}" class="galleryOverlayImageClass" src="${url}" alt="${bracelet}.jpg">
                    </div>
                    <div class="galleryOverlayRightDiv">
                        <p id="galleryOverlayDescription${bracelet}" class="galleryOverlayHeadClass">bracelet ID - ${bracelet}</p>
                        <div class="galleryOverlayMarmeladaContactDiv">
                            <p class="aboutText">Like this one? Contact me for more information!</p>
                            <a id="galleryOverlayMarmeladaContactAnchor${bracelet}" class="galleryOverlayMarmeladaContactAnchorClass"
                                href="contact.html">
                                Contact
                            </a>    
                        </div>
                    </div>
                </div>
             </div>`;
        let script = document.createElement("script");
        script.text = `
                function galleryProductOn${bracelet}() {
                    document.getElementById("galleryOverlayOuterDiv${bracelet}").style.display = "block";
                }
                
                function galleryProductOff${bracelet}() {
                    document.getElementById("galleryOverlayOuterDiv${bracelet}").addEventListener("click", function (e) {
                        if (this === e.target) {
                            document.getElementById("galleryOverlayOuterDiv${bracelet}").style.display = "none";
                        }
                    });
                }
                
                function galleryProductXOff${bracelet}() {
                    document.getElementById("galleryOverlayOuterDiv${bracelet}").style.display = "none";
                }`;
        galleryContent.appendChild(script);
    }
    braceletHTML += `</div>`
    totalHTML += braceletHTML;

    //earrings
    let earringHTML = `<div id="earringTab" class="tabContent">\n`;
    for (let i = 0; i < 4; i++) { //I know.. its hacky. adding b+i for generating proper script.
        let earring = `e${i}`;
        let url = `../resources/images/mitushImages/products/earrings/e${i}.jpg`;
        earringHTML +=
            `<img id="productImage${earring}" class="galleryImage" src="${url}" onclick="galleryProductOn${earring}()" alt="${earring}.jpg">
             <div id="galleryOverlayOuterDiv${earring}" class="galleryOverlayOuterDivClass" onclick="galleryProductOff${earring}()">
                <div class="galleryOverlayInnerDiv">
                    <div id="galleryOverlayXButton1" class="galleryOverlayXButtonClass" onclick="galleryProductXOff${earring}()"><i class="fas fa-times "></i></div>
                    <div class="galleryOverlayLeftDiv">
                        <img id="galleryOverlayImageb${i}" class="galleryOverlayImageClass" src="${url}" alt="${earring}.jpg">
                    </div>
                    <div class="galleryOverlayRightDiv">
                        <p id="galleryOverlayDescription${earring}" class="galleryOverlayHeadClass">earring ID - ${earring}</p>
                        <div class="galleryOverlayMarmeladaContactDiv">
                            <p class="aboutText">Like this one? Contact me for more information!</p>
                            <a id="galleryOverlayMarmeladaContactAnchor${earring}" class="galleryOverlayMarmeladaContactAnchorClass"
                                href="contact.html">
                                Contact
                            </a>    
                        </div>
                    </div>
                </div>
             </div>`;
        let script = document.createElement("script");
        script.text = `
                function galleryProductOn${earring}() {
                    document.getElementById("galleryOverlayOuterDiv${earring}").style.display = "block";
                }
                
                function galleryProductOff${earring}() {
                    document.getElementById("galleryOverlayOuterDiv${earring}").addEventListener("click", function (e) {
                        if (this === e.target) {
                            document.getElementById("galleryOverlayOuterDiv${earring}").style.display = "none";
                        }
                    });
                }
                
                function galleryProductXOff${earring}() {
                    document.getElementById("galleryOverlayOuterDiv${earring}").style.display = "none";
                }`;
        galleryContent.appendChild(script);
    }
    earringHTML += `</div>`
    totalHTML += earringHTML;
    galleryContent.innerHTML = totalHTML;
}
