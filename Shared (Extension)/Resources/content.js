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
             if (looksLikeFeedDocument(doc)) installStyle(doc, FEED_STYLE_ID, feedCss);
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
