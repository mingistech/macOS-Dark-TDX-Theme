 (() => {
     "use strict";
     
     const PAGE_STYLE_ID = "tdx-no-more-purple-page";
     const FEED_STYLE_ID = "tdx-no-more-purple-feed";
     const DODGER_BLUE = "#1e90ff";
     const HEADER_GRAY = "#99a2b1";
     const LABEL_GRAY = "#8d96a8";
     const ICON_GRAY = "#889fc7";
     const TITLE_GRAY = "#a0a8b7";
     const PANEL_BG = "#262a31";
     const CONTROL_BG = "#2e333c";
     const CHECKBOX_BLUE = "#282828";
     const HOME_ICON_SVG = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23889fc7' d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 35.5-28.8 64.2-64.2 64.2H384c-35.3 0-64-28.7-64-64v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 35.3-28.7 64-64 64H128.1c-35.5 0-64.2-28.8-64.2-64.2l.7-160.2h-32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c6-5.3 13.7-8 21.6-8s15.6 2.7 21.6 8L565.7 231.5c7 7 10.1 15 10.1 24z'/%3E%3C/svg%3E\")";
     
     const pageCss = `
         :root {
             --tdx-link-color: ${DODGER_BLUE} !important;
             --bs-link-color: ${DODGER_BLUE} !important;
             --bs-link-hover-color: ${DODGER_BLUE} !important;
             --tdx-primary: ${HEADER_GRAY} !important;
             --bs-primary: ${HEADER_GRAY} !important;
             --bs-primary-rgb: 153, 162, 177 !important;
         }
     
         a,
         a:link,
         a:visited,
         .btn-link,
         .btn-link *,
         .text-primary,
         .text-primary *,
         [role="button"],
         [role="button"] *,
         [class*="link"],
         [class*="link"] *,
         [class*="Link"],
         [class*="Link"] *,
         [href],
         [href] *,
         [onclick],
         [onclick] * {
             color: ${DODGER_BLUE} !important;
             -webkit-text-fill-color: ${DODGER_BLUE} !important;
             fill: ${DODGER_BLUE} !important;
             text-decoration-color: ${DODGER_BLUE} !important;
         }
     
         [role="tablist"] [role="tab"],
         [role="tablist"] [role="tab"] *,
         .nav-tabs > li > a,
         .nav-tabs > li > a *,
         .tab-bar a,
         .tab-bar a * {
             color: ${DODGER_BLUE} !important;
             -webkit-text-fill-color: ${DODGER_BLUE} !important;
             fill: ${DODGER_BLUE} !important;
         }
     
         [role="tablist"] i,
         [role="tablist"] i::before,
         [role="tablist"] svg,
         [role="tablist"] svg *,
         [role="tablist"] .fa,
         [role="tablist"] .fa::before,
         [role="tablist"] .fas,
         [role="tablist"] .fas::before,
         [role="tablist"] .far,
         [role="tablist"] .far::before,
         [role="tablist"] .glyphicon,
         [role="tablist"] .glyphicon::before,
         .nav-tabs i,
         .nav-tabs i::before,
         .nav-tabs svg,
         .nav-tabs svg *,
         .tab-bar i,
         .tab-bar i::before,
         .tab-bar svg,
         .tab-bar svg * {
             color: ${ICON_GRAY} !important;
             -webkit-text-fill-color: ${ICON_GRAY} !important;
             fill: ${ICON_GRAY} !important;
             stroke: ${ICON_GRAY} !important;
         }
     
         header [aria-label="Home"],
         header [aria-label="Home"] *,
         header [title="Home"],
         header [title="Home"] *,
         header a[href*="/TDWorkManagement/"] i,
         header a[href*="/TDWorkManagement/"] i::before,
         header a[href*="/TDNext/Home/"] i,
         header a[href*="/TDNext/Home/"] i::before,
         .tdx-header [aria-label="Home"],
         .tdx-header [aria-label="Home"] *,
         nav [aria-label="Home"],
         nav [aria-label="Home"] *,
         #tabContainer #homeTab,
         #tabContainer #homeTab *,
         #tabContainer .tdx-navigation-tabs__home-tab,
         #tabContainer .tdx-navigation-tabs__home-tab *,
         #tabContainer .tdx-icon--home-on,
         #tabContainer .tdx-icon--home-on::before,
         #tabContainer .tdx-icon--home-off,
         #tabContainer .tdx-icon--home-off::before {
             color: ${ICON_GRAY} !important;
             -webkit-text-fill-color: ${ICON_GRAY} !important;
             fill: ${ICON_GRAY} !important;
             stroke: ${ICON_GRAY} !important;
         }
     
     
         #tabContainer #homeTab .tdx-icon--home-on,
         #tabContainer #homeTab .tdx-icon--home-off,
         #tabContainer #homeTab .tdx-icon--home {
             content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23889fc7' d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 35.5-28.8 64.2-64.2 64.2H384c-35.3 0-64-28.7-64-64v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 35.3-28.7 64-64 64H128.1c-35.5 0-64.2-28.8-64.2-64.2l.7-160.2h-32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c6-5.3 13.7-8 21.6-8s15.6 2.7 21.6 8L565.7 231.5c7 7 10.1 15 10.1 24z'/%3E%3C/svg%3E") !important;
             width: 14px !important;
             height: 14px !important;
             display: inline-block !important;
         }
     
         header h1,
         header h1 *,
         header a[href*="umich.edu"],
         header a[href*="umich.edu"] *,
         .tdx-header h1,
         .tdx-header h1 *,
         .app-header h1,
         .app-header h1 *,
         button[aria-label*="View Applications"],
         button[aria-label*="View Applications"] *,
         button[title*="View Applications"],
         button[title*="View Applications"] *,
         [aria-label*="View Applications"],
         [aria-label*="View Applications"] * {
             color: ${TITLE_GRAY} !important;
             -webkit-text-fill-color: ${TITLE_GRAY} !important;
             fill: ${TITLE_GRAY} !important;
         }
     
         button.btn-primary.dropdown-toggle,
         button.dropdown-toggle.btn-primary,
         .btn-group > button.btn-primary,
         .tdx-toolbar button.btn-primary,
         .toolbar button.btn-primary,
         [aria-label="New"],
         [title="New"],
         [aria-label="New Asset"],
         [title="New Asset"],
         button[aria-label="New Asset"],
         button[title="New Asset"] {
             background-color: ${DODGER_BLUE} !important;
             border-color: ${DODGER_BLUE} !important;
             color: ${HEADER_GRAY} !important;
                  -webkit-text-fill-color: ${HEADER_GRAY} !important;
                  fill: ${HEADER_GRAY} !important;
         }
     
         button.btn-primary.dropdown-toggle:hover,
         button.dropdown-toggle.btn-primary:hover,
         .btn-group > button.btn-primary:hover,
         .tdx-toolbar button.btn-primary:hover,
         .toolbar button.btn-primary:hover,
         [aria-label="New"]:hover,
         [title="New"]:hover,
         [aria-label="New Asset"]:hover,
         [title="New Asset"]:hover,
         button[aria-label="New Asset"]:hover,
         button[title="New Asset"]:hover {
             background-color: #187bcd !important;
             border-color: #187bcd !important;
         }
     
         button[aria-label*="Actions"],
         button[title*="Actions"],
         button[aria-label*="My Saved Searches"],
         button[title*="My Saved Searches"],
         button[aria-label*="Saved Searches"],
         button[title*="Saved Searches"],
         button[aria-label*="Group By"],
         button[title*="Group By"],
         button[aria-label*="Configure Grid"],
         button[title*="Configure Grid"],
         button[aria-label="New"],
         button[title="New"],
         [role="button"][aria-label*="Actions"],
         [role="button"][title*="Actions"],
         [role="button"][aria-label*="My Saved Searches"],
         [role="button"][title*="My Saved Searches"],
         [role="button"][aria-label*="Saved Searches"],
         [role="button"][title*="Saved Searches"],
         [role="button"][aria-label*="Group By"],
         [role="button"][title*="Group By"],
         [role="button"][aria-label*="Configure Grid"],
         [role="button"][title*="Configure Grid"],
         [role="button"][aria-label="New"],
         [role="button"][title="New"],
         [aria-label*="Actions"].btn,
         [title*="Actions"].btn,
         [aria-label*="My Saved Searches"].btn,
         [title*="My Saved Searches"].btn,
         [aria-label*="Saved Searches"].btn,
         [title*="Saved Searches"].btn,
         [aria-label*="Group By"].btn,
         [title*="Group By"].btn,
         [aria-label*="Configure Grid"].btn,
         [title*="Configure Grid"].btn,
         [aria-label="New"].btn,
         [title="New"].btn {
             background-color: ${CONTROL_BG} !important;
             background-image: none !important;
             border-color: ${CONTROL_BG} !important;
         }
     
         h2,
         h3,
         dt,
         label,
         strong,
         b,
         span.control-label,
         .control-label,
         .field-label,
         .detail-label,
         .form-label,
         .text-muted,
         .muted,
         [class*="field-label"],
         [class*="detail-label"],
         [class*="field-name"],
         [class*="detail-name"],
         [class*="attribute"],
         [class*="metadata"] {
             color: ${LABEL_GRAY} !important;
             -webkit-text-fill-color: ${LABEL_GRAY} !important;
             fill: ${LABEL_GRAY} !important;
         }
     
         dt,
         label,
         span.control-label,
         .control-label,
         .field-label,
         .detail-label,
         .form-label,
         [class*="Field"],
         [class*="field"],
         [class*="Detail"],
         [class*="detail"] {
             background-color: transparent !important;
             background-image: none !important;
             box-shadow: none !important;
         }
     
         button[aria-label*="Comment"],
         button[title*="Comment"],
         button[aria-label*="Like"],
         button[title*="Like"],
         button[aria-label*="More Feed Entry Actions"],
         button[title*="More"],
         button.btn-link,
         button.btn-link *,
         .feed-entry-actions button,
         .feed-entry-actions button *,
         [class*="feed"] button[onclick],
         [class*="feed"] button[onclick] *,
         [class*="Feed"] button[onclick],
         [class*="Feed"] button[onclick] *,
         #assetFeed .feed-actions button.btn-link,
         #assetFeed .feed-actions button.btn-link *,
         #assetFeed .feed-actions [class~="btn-link"],
         #assetFeed .feed-actions [class~="btn-link"] * {
             color: ${DODGER_BLUE} !important;
             -webkit-text-fill-color: ${DODGER_BLUE} !important;
             fill: ${DODGER_BLUE} !important;
             text-decoration-color: ${DODGER_BLUE} !important;
         }
     
         tdx-chart svg g[aria-label*="%"] rect,
         .tdx-chart svg g[aria-label*="%"] rect,
         .chart-container svg g[aria-label*="%"] rect,
         svg g[aria-label*="%"] rect,
         tdx-chart svg g:has(> text):has(> path) > rect,
         .tdx-chart svg g:has(> text):has(> path) > rect,
         .chart-container svg g:has(> text):has(> path) > rect {
             fill: ${PANEL_BG} !important;
             stroke: ${PANEL_BG} !important;
         }
     
         #tdx-workmgmt-container-collection svg g > path[stroke-width="0"][fill-opacity="0.6"] {
             fill-opacity: 0 !important;
             stroke-opacity: 0 !important;
         }
     `;
     
     const feedCss = `
             a,
             a:link,
             a:visited,
             button,
             .btn-link,
             .text-primary,
             [role="button"],
             [class*="link"],
             [class*="Link"],
             [href],
             [onclick],
             a *,
             button *,
             .btn-link *,
             .text-primary *,
             [role="button"] *,
             [class*="link"] *,
             [class*="Link"] *,
             [href] *,
             [onclick] * {
             color: ${DODGER_BLUE} !important;
             -webkit-text-fill-color: ${DODGER_BLUE} !important;
             fill: ${DODGER_BLUE} !important;
             text-decoration-color: ${DODGER_BLUE} !important;
             }
             
                 input[type="checkbox"] {
                                 -webkit-appearance: none !important;
                                 appearance: none !important;
                                 width: 12px !important;
                                 height: 12px !important;
                                 margin: 0 5px 0 0 !important;
                                 border: 1px solid ${CHECKBOX_BLUE} !important;
                                 border-radius: 3px !important;
                                 background: ${CHECKBOX_BLUE} !important;
                                 background-color: ${CHECKBOX_BLUE} !important;
                                 box-shadow: none !important;
                                 accent-color: ${CHECKBOX_BLUE} !important;
                                 vertical-align: -2px !important;
                                 position: relative !important;
                             }
             
                             input[type="checkbox"]:checked::after {
                                 content: "" !important;
                                 position: absolute !important;
                                 left: 3px !important;
                                 top: 0px !important;
                                 width: 4px !important;
                                 height: 7px !important;
                                 border: solid ${HEADER_GRAY} !important;
                                 border-width: 0 2px 2px 0 !important;
                                 transform: rotate(45deg) !important;
                             }
             `;
     
     function looksLikeTdxDocument(doc) {
         const url = doc?.URL || "";
         return url.startsWith("about:srcdoc") ||
         url.includes("teamdynamix.umich.edu") ||
         Boolean(doc?.querySelector("#appDesktop, #ticketDesktopFeed281, #assetFeed, [href*='teamdynamix.umich.edu']"));
     }
     
     function looksLikeFeedDocument(doc) {
         if (!doc) return false;
         const url = doc.URL || "";
         if (url.startsWith("about:srcdoc")) return true;
         
         return Boolean(
                        doc.querySelector("#ticketDesktopFeed281, #assetFeed") ||
                        doc.querySelector("[aria-label*='Ticketing Feed']") ||
                        doc.body?.textContent?.includes("Ticketing Feed") ||
                        doc.querySelector("a[href*='TicketDet'], button[title*='Comment'], button[title*='Like']")
                        );
     }
     
     function installStyle(doc, id, css) {
         const root = doc.head || doc.documentElement;
         if (!root) return;
         
         let style = doc.getElementById(id);
         if (!style) {
             style = doc.createElement("style");
             style.id = id;
             root.appendChild(style);
         }
         
         if (style.textContent !== css) style.textContent = css;
     }
     
     function parseRgb(value) {
         const match = value?.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
         if (!match) return null;
         return { r: Number(match[1]), g: Number(match[2]), b: Number(match[3]) };
     }
     
     function isPurple(value) {
         const rgb = parseRgb(value);
         if (!rgb) return false;
         return rgb.b >= 85 &&
         rgb.r >= 60 &&
         rgb.g <= 170 &&
         rgb.b >= rgb.g - 5 &&
         rgb.r >= rgb.g - 30 &&
         (rgb.b - rgb.g > 5 || rgb.r - rgb.g > 5 || rgb.b > 130);
     }
     
     function isLabelLike(element) {
         const tag = element.tagName?.toLowerCase() || "";
         const label = `${element.id || ""} ${element.className || ""}`.toLowerCase();
         return tag === "dt" || tag === "label" ||
         element.matches("span.control-label, .control-label, .field-label, .detail-label, .form-label") ||
         label.includes("field") || label.includes("detail") || label.includes("meta") || label.includes("label");
     }
     
     function normalizeControlText(text) {
         return (text || "").replace(/\s+/g, " ").trim();
     }
     
     function isTargetControlLabel(text) {
         return /^(Actions|My Saved Searches|Group By:\s*None|Configure Grid|New)$/i.test(normalizeControlText(text));
     }
     
     function repaintNamedControls(doc) {
         if (!looksLikeTdxDocument(doc)) return;
         
         const selector = "button, a, [role='button'], .btn, .dropdown-toggle, [aria-haspopup], [aria-label], [title], span, div";
         for (const element of doc.querySelectorAll(selector)) {
             const label = normalizeControlText([
                 element.getAttribute("aria-label"),
                 element.getAttribute("title"),
                 element.textContent
             ].filter(Boolean).join(" "));
             
             if (!isTargetControlLabel(label)) continue;
             
             const control = element.closest("button, a, [role='button'], .btn, .dropdown-toggle, [aria-haspopup]") || element;
             control.style.setProperty("background-color", CONTROL_BG, "important");
             control.style.setProperty("background-image", "none", "important");
             control.style.setProperty("border-color", CONTROL_BG, "important");
         }
     }
     function repaintFeedCheckboxes(doc) {
         if (!looksLikeFeedDocument(doc)) return;

         for (const checkbox of doc.querySelectorAll('input[type="checkbox"]')) {
             checkbox.style.setProperty("accent-color", CHECKBOX_BLUE, "important");
         }
     }

     function repaintHomeIcon(doc) {
         if (!looksLikeTdxDocument(doc)) return;

         for (const element of doc.querySelectorAll("#tabContainer #homeTab, #tabContainer #homeTab *")) {
             element.style.setProperty("color", ICON_GRAY, "important");
             element.style.setProperty("-webkit-text-fill-color", ICON_GRAY, "important");
             element.style.setProperty("fill", ICON_GRAY, "important");
             element.style.setProperty("stroke", ICON_GRAY, "important");

             if (element.matches(".tdx-icon--home-on, .tdx-icon--home-off, .tdx-icon--home")) {
                 element.style.setProperty("content", HOME_ICON_SVG, "important");
                 element.style.setProperty("width", "14px", "important");
                 element.style.setProperty("height", "14px", "important");
                 element.style.setProperty("display", "inline-block", "important");
             }
         }
     }

     function repaintRemainingPurple(doc) {
         if (!looksLikeTdxDocument(doc) || !doc.defaultView) return;

         const selector = [
             "h1", "h2", "h3", "h4", "h5", "h6", "th", "dt", "label", "strong", "b",
             "span.control-label", ".control-label", ".field-label", ".detail-label", ".form-label",
             "[role='tab']", "[role='heading']",
             "[class*='Header']", "[class*='header']", "[class*='Heading']", "[class*='heading']",
             "[class*='Title']", "[class*='title']", "[class*='Label']", "[class*='label']",
             "[class*='Field']", "[class*='field']", "[class*='Detail']", "[class*='detail']",
             "[class*='panel']", "[class*='Panel']", "[class*='portlet']", "[class*='Portlet']",
             "[class*='widget']", "[class*='Widget']", "[class*='module']", "[class*='Module']"
         ].join(", ");

         for (const element of doc.querySelectorAll(selector)) {
             const style = doc.defaultView.getComputedStyle(element);

             if (isLabelLike(element)) {
                 element.style.setProperty("background-color", "transparent", "important");
                 element.style.setProperty("background-image", "none", "important");
                 element.style.setProperty("box-shadow", "none", "important");
             }

             if ((isPurple(style.color) || isPurple(style.webkitTextFillColor)) && !element.closest("a")) {
                 const color = isLabelLike(element) ? LABEL_GRAY : HEADER_GRAY;
                 element.style.setProperty("color", color, "important");
                 element.style.setProperty("-webkit-text-fill-color", color, "important");
                 element.style.setProperty("text-decoration-color", color, "important");
             }

             if (!isLabelLike(element) && isPurple(style.backgroundColor)) {
                 element.style.setProperty("background-color", HEADER_GRAY, "important");
                 element.style.setProperty("border-color", HEADER_GRAY, "important");
             }
         }
     }

     function eachReachableDocument(callback) {
         callback(document);
         for (const frame of document.querySelectorAll("iframe")) {
             try {
                 if (frame.contentDocument) callback(frame.contentDocument);
             } catch (_) {
                 // Cross-origin frames are intentionally ignored.
             }
         }
     }

     function applyStyles() {
         eachReachableDocument((doc) => {
             if (!looksLikeTdxDocument(doc)) return;
             installStyle(doc, PAGE_STYLE_ID, pageCss);
             repaintRemainingPurple(doc);
             repaintNamedControls(doc);
             repaintHomeIcon(doc);
             if (looksLikeFeedDocument(doc)) {
                 installStyle(doc, FEED_STYLE_ID, feedCss);
                 repaintFeedCheckboxes(doc);
             }
         });
     }

     function observeDocument(doc) {
         if (!doc?.documentElement || doc.documentElement.dataset.tdxThemeObserved === "true") return;
         doc.documentElement.dataset.tdxThemeObserved = "true";
         new MutationObserver(applyStyles).observe(doc.documentElement, { childList: true, subtree: true });
     }

     function tick() {
         applyStyles();
         eachReachableDocument(observeDocument);
     }

     tick();
     window.addEventListener("load", tick, { once: false });
     window.addEventListener("focus", tick, { passive: true });
     setInterval(tick, 1000);
 })();
