module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/LogoutButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoutButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function LogoutButton() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = async ()=>{
        setLoading(true);
        await fetch("/api/auth/logout", {
            method: "POST"
        });
        router.push("/login");
        router.refresh();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleLogout,
        disabled: loading,
        style: {
            padding: "8px 16px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            color: loading ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.7)",
            fontSize: 13,
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.2s ease"
        },
        children: loading ? "Saliendo..." : "Cerrar sesión"
    }, void 0, false, {
        fileName: "[project]/app/LogoutButton.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/InitFirebaseButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InitFirebaseButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function InitFirebaseButton() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleInit = async ()=>{
        setLoading(true);
        setMessage(null);
        try {
            const res = await fetch("/api/compositions/init", {
                method: "POST",
                credentials: "include"
            });
            let data;
            try {
                data = await res.json();
            } catch  {
                data = {
                    error: `HTTP ${res.status}`,
                    details: await res.text()
                };
            }
            if (!res.ok) {
                const msg = data.details ? `${data.error}: ${data.details}` : data.error ?? "Error al inicializar";
                throw new Error(msg);
            }
            setMessage("Colección inicializada correctamente");
            router.refresh();
        } catch (err) {
            setMessage(err instanceof Error ? err.message : "Error desconocido");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            bottom: 24,
            right: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 8
        },
        children: [
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12,
                    color: message.startsWith("Colección") ? "#9DFF20" : "#ff4444",
                    padding: "4px 8px",
                    borderRadius: 6,
                    background: "rgba(0,0,0,0.6)"
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/app/InitFirebaseButton.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleInit,
                disabled: loading,
                title: "Inicializar colección en Firebase con el proyecto actual",
                style: {
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "2px solid rgba(157,255,32,0.5)",
                    background: "rgba(157,255,32,0.12)",
                    color: "#9DFF20",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    transition: "all 0.2s ease"
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 18
                    },
                    children: "⋯"
                }, void 0, false, {
                    fileName: "[project]/app/InitFirebaseButton.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "12",
                            cy: "5",
                            rx: "9",
                            ry: "3"
                        }, void 0, false, {
                            fileName: "[project]/app/InitFirebaseButton.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                        }, void 0, false, {
                            fileName: "[project]/app/InitFirebaseButton.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 12c0 1.66 4 3 9 3s9-1.34 9-3"
                        }, void 0, false, {
                            fileName: "[project]/app/InitFirebaseButton.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/InitFirebaseButton.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/InitFirebaseButton.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/InitFirebaseButton.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/scenes/LogoCurtain.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoCurtain",
    ()=>LogoCurtain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
;
;
const COLS = 6;
const ROWS = 8;
// Deterministic grid of logos
const logoGrid = Array.from({
    length: COLS * ROWS
}, (_, i)=>{
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    return {
        col,
        row,
        // Stagger: top-center logos fall first, edges fall later
        delayFactor: Math.abs(col - (COLS - 1) / 2) * 0.12 + row * 0.06,
        rotateInit: (i * 37 + 11) % 30 - 15,
        scaleJitter: 0.85 + i * 13 % 20 / 100
    };
});
const LogoCurtain = ()=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const isVertical = height > width;
    const logoSize = isVertical ? 110 : 130;
    const gapX = isVertical ? (width - COLS * logoSize) / (COLS + 1) : (width - COLS * logoSize) / (COLS + 1);
    const gapY = isVertical ? (height - ROWS * logoSize) / (ROWS + 1) : (height - ROWS * logoSize) / (ROWS + 1);
    // Phase 1: Logos fall into grid (frames 0 → 2s)
    // Phase 2: Hold briefly (2s → 2.5s)
    // Phase 3: Curtain splits open (2.5s → 4s)
    // Global brightness pulse
    const globalPulse = 0.6 + 0.4 * Math.sin(frame * 0.08);
    // Flash at the end
    const flashOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        3.2 * fps,
        3.5 * fps,
        3.8 * fps,
        4.2 * fps
    ], [
        0,
        0.8,
        0.3,
        0
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    // Central glow that grows
    const centralGlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        1.5 * fps,
        3 * fps
    ], [
        0,
        1
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].in(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
    });
    // Title fade in at the end
    const titleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        3 * fps,
        3.8 * fps
    ], [
        0,
        1
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    const titleScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        3 * fps,
        3.8 * fps
    ], [
        0.5,
        1
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].back(1.5))
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            backgroundColor: "#050508"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    backgroundImage: "linear-gradient(rgba(157,255,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(157,255,32,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    opacity: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/LogoCurtain.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isVertical ? 600 : 900,
                    height: isVertical ? 600 : 900,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(157,255,32,0.3) 0%, rgba(157,255,32,0.05) 50%, transparent 70%)",
                    opacity: centralGlow * 0.6,
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/LogoCurtain.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            logoGrid.map((item, i)=>{
                const baseDelay = Math.round(item.delayFactor * fps * 0.8);
                // Phase 1: Fall into position
                const fallSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                    frame,
                    fps,
                    delay: baseDelay,
                    config: {
                        damping: 12,
                        stiffness: 80,
                        mass: 0.8
                    }
                });
                const startY = -logoSize * 2 - item.row * 50;
                const targetX = gapX + item.col * (logoSize + gapX);
                const targetY = gapY + item.row * (logoSize + gapY);
                const currentY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(fallSpring, [
                    0,
                    1
                ], [
                    startY,
                    targetY
                ]);
                const currentRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(fallSpring, [
                    0,
                    1
                ], [
                    item.rotateInit * 2,
                    0
                ]);
                const currentScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(fallSpring, [
                    0,
                    1
                ], [
                    item.scaleJitter * 0.5,
                    item.scaleJitter
                ]);
                const currentOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(fallSpring, [
                    0,
                    0.3,
                    1
                ], [
                    0,
                    0.6,
                    0.7
                ]);
                // Phase 3: Curtain split - logos fly outward
                const splitStart = 2.8 * fps;
                const splitProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
                    splitStart,
                    splitStart + 1.2 * fps
                ], [
                    0,
                    1
                ], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].in(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
                });
                const centerX = width / 2;
                const centerY = height / 2;
                const dx = targetX + logoSize / 2 - centerX;
                const dy = targetY + logoSize / 2 - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const flyX = dx / dist * splitProgress * (isVertical ? 1200 : 1600);
                const flyY = dy / dist * splitProgress * (isVertical ? 1400 : 1000);
                const flyRotate = splitProgress * item.rotateInit * 8;
                const flyOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(splitProgress, [
                    0,
                    0.5,
                    1
                ], [
                    1,
                    0.6,
                    0
                ]);
                // Individual glow
                const itemGlow = 0.2 + 0.15 * Math.sin(frame * 0.06 + i * 0.7);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: targetX + flyX,
                        top: currentY + flyY,
                        width: logoSize,
                        height: logoSize,
                        transform: `rotate(${currentRotation + flyRotate}deg) scale(${currentScale})`,
                        opacity: currentOpacity * flyOpacity,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: logoSize * 0.75,
                            height: logoSize * 0.75,
                            borderRadius: 16,
                            backgroundColor: `rgba(157,255,32,${0.04 + itemGlow * 0.06})`,
                            border: `1px solid rgba(157,255,32,${0.1 + itemGlow * 0.15})`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 0 ${20 * itemGlow}px rgba(157,255,32,${itemGlow * 0.3})`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticFile"])("logo.png"),
                            style: {
                                width: logoSize * 0.5,
                                height: logoSize * 0.5,
                                filter: `drop-shadow(0 0 ${8 * globalPulse}px rgba(157,255,32,0.4)) brightness(${0.7 + itemGlow * 0.3})`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/LogoCurtain.tsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/LogoCurtain.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/src/scenes/LogoCurtain.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    background: "radial-gradient(circle, rgba(157,255,32,0.9) 0%, rgba(157,255,32,0.3) 30%, transparent 60%)",
                    opacity: flashOpacity
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/LogoCurtain.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: titleOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        transform: `scale(${titleScale})`,
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticFile"])("logo.png"),
                        style: {
                            width: isVertical ? 120 : 150,
                            height: isVertical ? 120 : 150,
                            filter: "drop-shadow(0 0 40px rgba(157,255,32,0.6))",
                            marginBottom: 16
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/LogoCurtain.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/scenes/LogoCurtain.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/scenes/LogoCurtain.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/LogoCurtain.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/scenes/LogoCurtain.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedBackground",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
;
;
const AnimatedBackground = ({ showGrid = true, showImage = true, imageOpacity = 0.15 })=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    // Subtle floating movement for the background
    const bgX = Math.sin(frame * 0.01) * 8;
    const bgY = Math.cos(frame * 0.008) * 6;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    backgroundColor: "#050508"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    opacity: imageOpacity,
                    transform: `translate(${bgX}px, ${bgY}px) scale(1.05)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticFile"])("BG.png"),
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Background.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    backgroundImage: "linear-gradient(rgba(157,255,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(157,255,32,0.04) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                    opacity: 0.6
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Background.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Background.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Particles.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingParticles",
    ()=>FloatingParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
;
;
// Deterministic particles (no random at render time)
const PARTICLES = Array.from({
    length: 30
}, (_, i)=>({
        x: (i * 73 + 17) % 100,
        y: (i * 41 + 29) % 100,
        size: 1.5 + i % 4 * 0.8,
        speed: 0.3 + i % 5 * 0.15,
        phase: i * 2.1 % (Math.PI * 2),
        opacity: 0.15 + i % 3 * 0.12
    }));
const FloatingParticles = ({ color = "#9DFF20", count = 30 })=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const particles = PARTICLES.slice(0, count);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            overflow: "hidden"
        },
        children: particles.map((p, i)=>{
            const x = p.x + Math.sin(frame * 0.02 * p.speed + p.phase) * 3;
            const y = p.y + Math.cos(frame * 0.015 * p.speed + p.phase) * 4;
            const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(frame * 0.04 + p.phase));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    width: p.size,
                    height: p.size,
                    borderRadius: "50%",
                    backgroundColor: color,
                    opacity: currentOpacity,
                    boxShadow: `0 0 ${p.size * 4}px ${color}`
                }
            }, i, false, {
                fileName: "[project]/src/components/Particles.tsx",
                lineNumber: 38,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Particles.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/scenes/Intro.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Intro",
    ()=>Intro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/google-fonts/dist/esm/Montserrat.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const { fontFamily } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadFont"])("normal", {
    weights: [
        "400",
        "600",
        "700",
        "900"
    ],
    subsets: [
        "latin"
    ]
});
const Intro = ()=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const isVertical = height > width;
    // === LOGO ANIMATIONS ===
    const logoRevealSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        config: {
            damping: 14,
            stiffness: 100
        }
    });
    const logoScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(logoRevealSpring, [
        0,
        1
    ], [
        0.3,
        1
    ]);
    const logoOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(logoRevealSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const logoRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(logoRevealSpring, [
        0,
        1
    ], [
        -10,
        0
    ]);
    // Logo floating
    const logoFloat = Math.sin(frame * 0.04) * 6;
    // Logo ring animation
    const ringScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: 8,
        config: {
            damping: 20,
            stiffness: 80
        }
    });
    const ringOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0.2 * fps,
        0.6 * fps
    ], [
        0,
        0.6
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    const ringRotation = frame * 0.3;
    // === TEXT ANIMATIONS ===
    const titleText = "TECHNOLOGY";
    // Subtitle with spring
    const subtitleSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: Math.round(1.4 * fps),
        config: {
            damping: 12,
            stiffness: 80
        }
    });
    const subtitleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(subtitleSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const subtitleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(subtitleSpring, [
        0,
        1
    ], [
        40,
        0
    ]);
    const subtitleScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(subtitleSpring, [
        0,
        1
    ], [
        0.8,
        1
    ]);
    // Accent lines
    const lineWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        1 * fps,
        1.8 * fps
    ], [
        0,
        isVertical ? 300 : 400
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
    });
    // Glow pulse
    const glowIntensity = 0.2 + 0.1 * Math.sin(frame * 0.06);
    // Bottom tagline with spring
    const taglineSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: Math.round(2.5 * fps),
        config: {
            damping: 200
        }
    });
    const taglineOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(taglineSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const taglineY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(taglineSpring, [
        0,
        1
    ], [
        20,
        0
    ]);
    // Scan line effect
    const scanY = frame * 4 % height;
    // Hexagon decorative elements
    const hexOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0.5 * fps,
        1 * fps
    ], [
        0,
        0.15
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    const logoSize = isVertical ? 200 : 220;
    const titleFontSize = isVertical ? 38 : 42;
    const subtitleFontSize = isVertical ? 22 : 24;
    const ringSize1 = isVertical ? 300 : 320;
    const ringSize2 = isVertical ? 360 : 370;
    const ringSize3 = isVertical ? 420 : 430;
    // Vertical layout: logo at ~30%, text at ~55%, tagline at bottom
    const logoTop = isVertical ? "32%" : "40%";
    const contentTop = isVertical ? "55%" : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedBackground"], {
                showGrid: true,
                showImage: true,
                imageOpacity: 0.12
            }, void 0, false, {
                fileName: "[project]/src/scenes/Intro.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingParticles"], {
                color: "#9DFF20",
                count: 20
            }, void 0, false, {
                fileName: "[project]/src/scenes/Intro.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: logoTop,
                    transform: "translate(-50%, -50%)",
                    width: isVertical ? 500 : 700,
                    height: isVertical ? 500 : 700,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(157,255,32,0.25) 0%, rgba(157,255,32,0.05) 40%, transparent 70%)",
                    opacity: glowIntensity,
                    filter: "blur(40px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/Intro.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: scanY,
                    height: 2,
                    background: "linear-gradient(90deg, transparent, rgba(157,255,32,0.15), transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/Intro.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            [
                {
                    size: ringSize1,
                    border: "1.5px solid rgba(157,255,32,0.25)",
                    rot: ringRotation,
                    dash: false
                },
                {
                    size: ringSize2,
                    border: "1px dashed rgba(157,255,32,0.1)",
                    rot: -ringRotation * 0.7,
                    dash: true
                },
                {
                    size: ringSize3,
                    border: "1px solid rgba(157,255,32,0.06)",
                    rot: ringRotation * 0.4,
                    dash: false
                }
            ].map((ring, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: "50%",
                        top: logoTop,
                        transform: `translate(-50%, -50%) scale(${ringScale}) rotate(${ring.rot}deg)`,
                        width: ring.size,
                        height: ring.size,
                        borderRadius: "50%",
                        border: ring.border,
                        opacity: ringOpacity * (1 - idx * 0.25)
                    }
                }, idx, false, {
                    fileName: "[project]/src/scenes/Intro.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            isVertical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 80,
                            right: 60,
                            width: 60,
                            height: 60,
                            border: "1px solid rgba(157,255,32,0.1)",
                            borderRadius: 8,
                            transform: `rotate(${45 + frame * 0.15}deg)`,
                            opacity: hexOpacity
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 200,
                            left: 50,
                            width: 40,
                            height: 40,
                            border: "1px solid rgba(157,255,32,0.08)",
                            borderRadius: 6,
                            transform: `rotate(${-30 + frame * 0.1}deg)`,
                            opacity: hexOpacity
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: logoTop,
                    transform: `translate(-50%, -50%) scale(${logoScale}) rotate(${logoRotate}deg) translateY(${logoFloat}px)`,
                    opacity: logoOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticFile"])("logo.png"),
                    style: {
                        width: logoSize,
                        height: logoSize,
                        filter: `drop-shadow(0 0 40px rgba(157,255,32,0.5))`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/scenes/Intro.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/scenes/Intro.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: isVertical ? contentTop : "60%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: isVertical ? 4 : 6,
                            overflow: "hidden"
                        },
                        children: titleText.split("").map((char, i)=>{
                            const charSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                                frame,
                                fps,
                                delay: Math.round(0.9 * fps + i * 2),
                                config: {
                                    damping: 15,
                                    stiffness: 120
                                }
                            });
                            const charY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(charSpring, [
                                0,
                                1
                            ], [
                                60,
                                0
                            ]);
                            const charOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(charSpring, [
                                0,
                                1
                            ], [
                                0,
                                1
                            ]);
                            const charScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(charSpring, [
                                0,
                                0.5,
                                1
                            ], [
                                0.5,
                                1.1,
                                1
                            ]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: titleFontSize,
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    letterSpacing: isVertical ? 5 : 8,
                                    transform: `translateY(${charY}px) scale(${charScale})`,
                                    opacity: charOpacity,
                                    textShadow: "0 0 20px rgba(157,255,32,0.3)"
                                },
                                children: char
                            }, i, false, {
                                fileName: "[project]/src/scenes/Intro.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: lineWidth,
                            height: 2,
                            marginTop: 20,
                            background: "linear-gradient(90deg, transparent, #9DFF20, transparent)",
                            boxShadow: "0 0 20px rgba(157,255,32,0.4)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: subtitleOpacity,
                            transform: `translateY(${subtitleY}px) scale(${subtitleScale})`,
                            fontSize: subtitleFontSize,
                            fontWeight: 600,
                            color: "#9DFF20",
                            marginTop: 24,
                            letterSpacing: isVertical ? 2 : 3,
                            textAlign: "center",
                            padding: isVertical ? "0 40px" : 0,
                            textShadow: "0 0 30px rgba(157,255,32,0.4)"
                        },
                        children: "Fábrica de Inteligencia Artificial"
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/scenes/Intro.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: isVertical ? 140 : 60,
                    left: "50%",
                    transform: `translateX(-50%) translateY(${taglineY}px)`,
                    opacity: taglineOpacity,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: isVertical ? "0 40px" : 0,
                    whiteSpace: "nowrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 40,
                            height: 1,
                            backgroundColor: "rgba(157,255,32,0.4)",
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: isVertical ? 13 : 14,
                            fontWeight: 400,
                            color: "rgba(255,255,255,0.5)",
                            letterSpacing: isVertical ? 2 : 4,
                            textTransform: "uppercase",
                            textAlign: "center"
                        },
                        children: "Cerrando la brecha tecnológica en LATAM"
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 40,
                            height: 1,
                            backgroundColor: "rgba(157,255,32,0.4)",
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Intro.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/scenes/Intro.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/scenes/Intro.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Professional SVG icons for services and products
__turbopack_context__.s([
    "BotIcon",
    ()=>BotIcon,
    "BrainIcon",
    ()=>BrainIcon,
    "CpuIcon",
    ()=>CpuIcon,
    "DatabaseIcon",
    ()=>DatabaseIcon,
    "EyeIcon",
    ()=>EyeIcon,
    "FlaskIcon",
    ()=>FlaskIcon,
    "GlobeIcon",
    ()=>GlobeIcon,
    "NetworkIcon",
    ()=>NetworkIcon,
    "ShieldIcon",
    ()=>ShieldIcon,
    "ZapIcon",
    ()=>ZapIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const BrainIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a6 6 0 0 0-6 6c0 1.66.68 3.16 1.76 4.24L12 16.49l4.24-4.25A5.98 5.98 0 0 0 18 8a6 6 0 0 0-6-6z"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 6.5C9.5 5.12 10.62 4 12 4s2.5 1.12 2.5 2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 16.5V22"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 20h8"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "8",
                r: "0.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "8",
                r: "0.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 8c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ZapIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            fill: `${color}22`,
            stroke: color
        }, void 0, false, {
            fileName: "[project]/src/components/Icons.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const EyeIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                fill: `${color}33`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 66,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const FlaskIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 3h6"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 3v6.5L4 20h16l-6-10.5V3"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 16h9"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "18",
                r: "0.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 87,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "14",
                cy: "18",
                r: "0.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "17",
                r: "0.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CpuIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "4",
                width: "16",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 107,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9",
                y: "9",
                width: "6",
                height: "6",
                rx: "1",
                fill: `${color}22`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ShieldIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z",
                fill: `${color}11`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 128,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const BotIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "8",
                width: "18",
                height: "12",
                rx: "3",
                fill: `${color}11`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 146,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v4"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 147,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "2",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 148,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "14",
                r: "1.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 149,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "14",
                r: "1.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 150,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 17.5c0 0 1.5 1 3 1s3-1 3-1"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 151,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 136,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const NetworkIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "5",
                r: "2.5",
                fill: `${color}22`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 169,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "19",
                r: "2.5",
                fill: `${color}22`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 170,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "19",
                r: "2.5",
                fill: `${color}22`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 171,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7.5v3"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 172,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 17L10.5 12.5"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 173,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5 17L13.5 12.5"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 174,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1.5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 175,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 159,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const GlobeIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 193,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12",
                cy: "12",
                rx: "4",
                ry: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 194,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 195,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 196,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 197,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 183,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DatabaseIcon = ({ size = 40, color = "#9DFF20" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3",
                fill: `${color}15`
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 215,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V5"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 216,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 11v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 217,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 11c0 1.66 4.03 3 9 3s9-1.34 9-3"
            }, void 0, false, {
                fileName: "[project]/src/components/Icons.tsx",
                lineNumber: 218,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Icons.tsx",
        lineNumber: 205,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/scenes/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Services",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/google-fonts/dist/esm/Montserrat.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const { fontFamily } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadFont"])("normal", {
    weights: [
        "400",
        "600",
        "700",
        "900"
    ],
    subsets: [
        "latin"
    ]
});
const services = [
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrainIcon"],
        title: "IA Predictiva",
        desc: "Analítica avanzada para optimización de flujos de trabajo"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZapIcon"],
        title: "Automatización RPA",
        desc: "Algoritmos robóticos que reducen costos y errores"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeIcon"],
        title: "Computer Vision",
        desc: "Deep Learning y visión artificial de última generación"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlaskIcon"],
        title: "Datos Sintéticos",
        desc: "Generación avanzada con IA para Machine Learning"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CpuIcon"],
        title: "Microchips IA",
        desc: "Hardware evolutivo con modelos de IA embebidos"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShieldIcon"],
        title: "Consultoría IP",
        desc: "Patentes, propiedad intelectual e innovación"
    }
];
const Services = ()=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const isVertical = height > width;
    // Title animation
    const titleSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        config: {
            damping: 14,
            stiffness: 100
        }
    });
    const titleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(titleSpring, [
        0,
        1
    ], [
        -300,
        0
    ]);
    const titleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(titleSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    // Decorative line
    const lineWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0.3 * fps,
        1 * fps
    ], [
        0,
        160
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
    });
    // Subtitle
    const subtitleSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: Math.round(0.4 * fps),
        config: {
            damping: 200
        }
    });
    const subtitleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(subtitleSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const cols = isVertical ? 2 : 3;
    const cardWidth = isVertical ? 460 : 560;
    const titleFontSize = isVertical ? 42 : 54;
    const cardGap = isVertical ? 20 : 20;
    // For vertical: use absolute positioning to fill full height
    const headerHeight = isVertical ? 220 : 180;
    const availableHeight = isVertical ? height - headerHeight - 80 : undefined;
    const rowHeight = availableHeight ? (availableHeight - cardGap * 2) / 3 : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedBackground"], {
                showGrid: true,
                showImage: true,
                imageOpacity: 0.08
            }, void 0, false, {
                fileName: "[project]/src/scenes/Services.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: isVertical ? 50 : 70,
                    left: isVertical ? 50 : 70,
                    right: isVertical ? 50 : 70
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        transform: `translateX(${titleX}px)`,
                        opacity: titleOpacity
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: isVertical ? 13 : 15,
                                fontWeight: 600,
                                color: "#9DFF20",
                                letterSpacing: 6,
                                textTransform: "uppercase",
                                marginBottom: 8
                            },
                            children: "Lo que hacemos"
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/Services.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: titleFontSize,
                                fontWeight: 900,
                                color: "#FFFFFF",
                                letterSpacing: 1,
                                lineHeight: 1.1
                            },
                            children: "Nuestros Servicios"
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/Services.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: lineWidth,
                                height: 3,
                                marginTop: 12,
                                background: "linear-gradient(90deg, #9DFF20, rgba(157,255,32,0.2))",
                                borderRadius: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/Services.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                opacity: subtitleOpacity,
                                fontSize: isVertical ? 14 : 16,
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.5)",
                                marginTop: 12,
                                letterSpacing: 1
                            },
                            children: "Soluciones de IA de extremo a extremo para empresas en LATAM"
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/Services.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/scenes/Services.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/scenes/Services.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: headerHeight,
                    left: isVertical ? 40 : 70,
                    right: isVertical ? 40 : 70,
                    bottom: isVertical ? 40 : 40,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: cardGap,
                    alignContent: isVertical ? "space-between" : "flex-start",
                    paddingTop: isVertical ? 10 : 40
                },
                children: services.map((service, i)=>{
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    const delay = Math.round(0.5 * fps + (row * cols + col) * 0.12 * fps);
                    const cardSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                        frame,
                        fps,
                        delay,
                        config: {
                            damping: 12,
                            stiffness: 80
                        }
                    });
                    const cardScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        0.6,
                        1
                    ]);
                    const cardOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        0,
                        1
                    ]);
                    const cardY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        60,
                        0
                    ]);
                    const cardRotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        15,
                        0
                    ]);
                    // Icon glow animation
                    const iconGlow = 0.3 + 0.2 * Math.sin(frame * 0.05 + i * 1.2);
                    // Hover-like highlight on card border
                    const borderGlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(Math.sin(frame * 0.04 + i * 0.8), [
                        -1,
                        1
                    ], [
                        0.08,
                        0.25
                    ]);
                    // Progress bar that fills on entry
                    const barProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
                        delay + 0.3 * fps,
                        delay + 1.2 * fps
                    ], [
                        0,
                        1
                    ], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
                    });
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: cardWidth,
                            height: isVertical && rowHeight ? rowHeight - 4 : undefined,
                            padding: isVertical ? "18px 22px" : "26px 28px",
                            backgroundColor: `rgba(157, 255, 32, 0.03)`,
                            border: `1px solid rgba(157, 255, 32, ${borderGlow})`,
                            borderRadius: 16,
                            transform: `scale(${cardScale}) translateY(${cardY}px) perspective(800px) rotateX(${cardRotateX}deg)`,
                            opacity: cardOpacity,
                            display: "flex",
                            alignItems: "center",
                            gap: isVertical ? 16 : 20,
                            backdropFilter: "blur(10px)",
                            boxSizing: "border-box"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: isVertical ? 50 : 56,
                                    height: isVertical ? 50 : 56,
                                    borderRadius: 12,
                                    backgroundColor: "rgba(157,255,32,0.08)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    boxShadow: `0 0 ${20 * iconGlow}px rgba(157,255,32,${iconGlow * 0.3})`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(service.Icon, {
                                    size: isVertical ? 26 : 30,
                                    color: "#9DFF20"
                                }, void 0, false, {
                                    fileName: "[project]/src/scenes/Services.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/scenes/Services.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: isVertical ? 18 : 20,
                                            fontWeight: 700,
                                            color: "#FFFFFF",
                                            marginBottom: 4
                                        },
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/scenes/Services.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: isVertical ? 12 : 14,
                                            fontWeight: 400,
                                            color: "rgba(255,255,255,0.55)",
                                            lineHeight: 1.4
                                        },
                                        children: service.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/scenes/Services.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "100%",
                                            height: 2,
                                            backgroundColor: "rgba(255,255,255,0.06)",
                                            borderRadius: 1,
                                            marginTop: 10,
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: `${barProgress * 100}%`,
                                                height: "100%",
                                                backgroundColor: "#9DFF20",
                                                borderRadius: 1,
                                                boxShadow: "0 0 8px rgba(157,255,32,0.4)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/scenes/Services.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/scenes/Services.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/scenes/Services.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/scenes/Services.tsx",
                        lineNumber: 221,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/scenes/Services.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/scenes/Services.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/scenes/Products.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Products",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/google-fonts/dist/esm/Montserrat.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const { fontFamily } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadFont"])("normal", {
    weights: [
        "400",
        "600",
        "700",
        "900"
    ],
    subsets: [
        "latin"
    ]
});
const products = [
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"],
        name: "NexAI",
        desc: "Plataforma no-code para crear agentes inteligentes humanizados en minutos",
        tags: [
            "No-Code",
            "Agentes IA",
            "Humanizados"
        ],
        accent: "#9DFF20"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkIcon"],
        name: "MASIVE",
        desc: "Smart Funnels multicanal: WhatsApp, Telegram, Facebook, Instagram, X",
        tags: [
            "Multicanal",
            "Smart Funnels",
            "Social"
        ],
        accent: "#7ACC1A"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeIcon"],
        name: "CityWise AI",
        desc: "Mapeo geográfico en tiempo real con conversaciones inteligentes de datos",
        tags: [
            "Geolocalización",
            "Real-Time",
            "Data"
        ],
        accent: "#9DFF20"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatabaseIcon"],
        name: "Data Engine",
        desc: "Web scraping inteligente y analítica avanzada, compatible GDPR",
        tags: [
            "Scraping",
            "Analytics",
            "GDPR"
        ],
        accent: "#7ACC1A"
    }
];
const Products = ()=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const isVertical = height > width;
    // Title animation
    const titleSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        config: {
            damping: 14,
            stiffness: 100
        }
    });
    const titleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(titleSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const titleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(titleSpring, [
        0,
        1
    ], [
        30,
        0
    ]);
    // Line animation
    const lineWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0.3 * fps,
        1 * fps
    ], [
        0,
        140
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
    });
    const cols = isVertical ? 1 : 2;
    const cardWidth = isVertical ? 940 : 845;
    // Vertical: header + 4 cards spread across full height
    const headerHeight = isVertical ? 160 : 140;
    const availableHeight = isVertical ? height - headerHeight - 80 : undefined;
    const cardSpacing = availableHeight ? (availableHeight - 4 * 130) / 3 : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedBackground"], {
                showGrid: true,
                showImage: true,
                imageOpacity: 0.06
            }, void 0, false, {
                fileName: "[project]/src/scenes/Products.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingParticles"], {
                color: "#9DFF20",
                count: 12
            }, void 0, false, {
                fileName: "[project]/src/scenes/Products.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: isVertical ? 50 : 60,
                    left: isVertical ? 50 : 80,
                    right: isVertical ? 50 : 80
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: titleOpacity,
                        transform: `translateY(${titleY}px)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: isVertical ? 13 : 15,
                                fontWeight: 600,
                                color: "#9DFF20",
                                letterSpacing: 6,
                                textTransform: "uppercase",
                                marginBottom: 8
                            },
                            children: "Plataformas"
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/Products.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: isVertical ? 44 : 50,
                                fontWeight: 900,
                                color: "#FFFFFF",
                                letterSpacing: 1
                            },
                            children: "Productos Estrella"
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/Products.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: lineWidth,
                                height: 3,
                                marginTop: 10,
                                background: "linear-gradient(90deg, #9DFF20, rgba(157,255,32,0.2))",
                                borderRadius: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/scenes/Products.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/scenes/Products.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/scenes/Products.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: headerHeight,
                    left: isVertical ? 40 : 80,
                    right: isVertical ? 40 : 80,
                    bottom: isVertical ? 40 : 40,
                    display: "flex",
                    flexDirection: isVertical ? "column" : "row",
                    flexWrap: isVertical ? "nowrap" : "wrap",
                    gap: isVertical ? cardSpacing ?? 20 : 24,
                    justifyContent: isVertical ? "space-between" : "flex-start",
                    alignItems: isVertical ? "center" : "flex-start",
                    paddingTop: isVertical ? 10 : 40
                },
                children: products.map((product, i)=>{
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    const delay = Math.round(0.5 * fps + (row * cols + col) * 0.2 * fps);
                    const cardSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                        frame,
                        fps,
                        delay,
                        config: {
                            damping: 12,
                            stiffness: 80
                        }
                    });
                    const cardX = isVertical ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        i % 2 === 0 ? -500 : 500,
                        0
                    ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        col === 0 ? -400 : 400,
                        0
                    ]);
                    const cardOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        0,
                        1
                    ]);
                    const cardRotateY = isVertical ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        i % 2 === 0 ? -20 : 20,
                        0
                    ]) : 0;
                    // Animated accent bar
                    const barWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        0,
                        4
                    ]);
                    // Tag stagger
                    const tagDelay = delay + Math.round(0.4 * fps);
                    // Subtle pulse on icon
                    const iconPulse = 1 + 0.05 * Math.sin(frame * 0.06 + i * 1.5);
                    // Shimmer effect
                    const shimmerX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
                        delay + fps,
                        delay + 2 * fps
                    ], [
                        -100,
                        200
                    ], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp"
                    });
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: cardWidth,
                            transform: `translateX(${cardX}px) perspective(1000px) rotateY(${cardRotateY}deg)`,
                            opacity: cardOpacity,
                            display: "flex",
                            alignItems: "stretch",
                            borderRadius: 16,
                            overflow: "hidden",
                            backgroundColor: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(157,255,32,0.1)",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: shimmerX,
                                    width: 60,
                                    height: "100%",
                                    background: "linear-gradient(90deg, transparent, rgba(157,255,32,0.06), transparent)",
                                    transform: "skewX(-15deg)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/scenes/Products.tsx",
                                lineNumber: 223,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: barWidth,
                                    backgroundColor: product.accent,
                                    boxShadow: `0 0 20px ${product.accent}55`,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/scenes/Products.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: isVertical ? "30px 24px" : "24px 28px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: isVertical ? 20 : 24,
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: isVertical ? 64 : 64,
                                            height: isVertical ? 64 : 64,
                                            borderRadius: 14,
                                            backgroundColor: `${product.accent}15`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            transform: `scale(${iconPulse})`,
                                            border: `1px solid ${product.accent}30`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(product.Icon, {
                                            size: isVertical ? 32 : 32,
                                            color: product.accent
                                        }, void 0, false, {
                                            fileName: "[project]/src/scenes/Products.tsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/scenes/Products.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: isVertical ? 24 : 26,
                                                    fontWeight: 900,
                                                    color: product.accent,
                                                    letterSpacing: 1,
                                                    marginBottom: 4
                                                },
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/scenes/Products.tsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: isVertical ? 13 : 14,
                                                    fontWeight: 400,
                                                    color: "rgba(255,255,255,0.6)",
                                                    lineHeight: 1.4,
                                                    marginBottom: 10
                                                },
                                                children: product.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/scenes/Products.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: 8
                                                },
                                                children: product.tags.map((tag, j)=>{
                                                    const tagSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                                                        frame,
                                                        fps,
                                                        delay: tagDelay + j * 4,
                                                        config: {
                                                            damping: 200
                                                        }
                                                    });
                                                    const tagOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(tagSpring, [
                                                        0,
                                                        1
                                                    ], [
                                                        0,
                                                        1
                                                    ]);
                                                    const tagScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(tagSpring, [
                                                        0,
                                                        1
                                                    ], [
                                                        0.5,
                                                        1
                                                    ]);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            opacity: tagOpacity,
                                                            transform: `scale(${tagScale})`,
                                                            fontSize: isVertical ? 10 : 11,
                                                            fontWeight: 600,
                                                            color: product.accent,
                                                            padding: "4px 10px",
                                                            borderRadius: 20,
                                                            backgroundColor: `${product.accent}12`,
                                                            border: `1px solid ${product.accent}30`,
                                                            letterSpacing: 0.5
                                                        },
                                                        children: tag
                                                    }, j, false, {
                                                        fileName: "[project]/src/scenes/Products.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/scenes/Products.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/scenes/Products.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/scenes/Products.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/scenes/Products.tsx",
                        lineNumber: 207,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/scenes/Products.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/scenes/Products.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/scenes/Metrics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Metrics",
    ()=>Metrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/google-fonts/dist/esm/Montserrat.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Background.tsx [app-ssr] (ecmascript)");
;
;
;
;
const { fontFamily } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadFont"])("normal", {
    weights: [
        "400",
        "600",
        "700",
        "900"
    ],
    subsets: [
        "latin"
    ]
});
const metrics = [
    {
        value: 45,
        prefix: "+",
        suffix: "%",
        label: "Ventas",
        sublabel: "Incremento promedio",
        color: "#9DFF20"
    },
    {
        value: 30,
        prefix: "+",
        suffix: "%",
        label: "Recaudo",
        sublabel: "Mejora en ingresos",
        color: "#7ACC1A"
    },
    {
        value: 69,
        prefix: "+",
        suffix: "%",
        label: "Conversión",
        sublabel: "Optimización de leads",
        color: "#9DFF20"
    },
    {
        value: 600,
        prefix: "",
        suffix: "%",
        label: "Productividad",
        sublabel: "Con agentes distribuidos",
        color: "#7ACC1A"
    }
];
const Metrics = ()=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const isVertical = height > width;
    // Title
    const titleSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        config: {
            damping: 12,
            stiffness: 80
        }
    });
    const titleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(titleSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const titleScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(titleSpring, [
        0,
        1
    ], [
        0.8,
        1
    ]);
    // Bottom tagline
    const taglineSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: Math.round(3 * fps),
        config: {
            damping: 200
        }
    });
    const taglineOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(taglineSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const numberFontSize = isVertical ? 64 : 72;
    const titleFontSize = isVertical ? 40 : 48;
    // For vertical: spread metrics across full height
    const headerHeight = isVertical ? 200 : 160;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedBackground"], {
                showGrid: true,
                showImage: true,
                imageOpacity: 0.05
            }, void 0, false, {
                fileName: "[project]/src/scenes/Metrics.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(157,255,32,0.06), transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/Metrics.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: isVertical ? 60 : 50,
                    left: 0,
                    right: 0,
                    opacity: titleOpacity,
                    transform: `scale(${titleScale})`,
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: isVertical ? 13 : 15,
                            fontWeight: 600,
                            color: "#9DFF20",
                            letterSpacing: 8,
                            textTransform: "uppercase",
                            marginBottom: 10
                        },
                        children: "Resultados reales"
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Metrics.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: titleFontSize,
                            fontWeight: 900,
                            color: "#FFFFFF",
                            letterSpacing: 1
                        },
                        children: "Impacto en tu Negocio"
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Metrics.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/scenes/Metrics.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: headerHeight,
                    left: isVertical ? 40 : 60,
                    right: isVertical ? 40 : 60,
                    bottom: isVertical ? 100 : 80,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: isVertical ? 20 : 40,
                    alignContent: isVertical ? "space-between" : "center",
                    justifyContent: "center"
                },
                children: metrics.map((metric, i)=>{
                    const delay = Math.round(0.5 * fps + i * 0.25 * fps);
                    // Card entrance with bounce
                    const cardSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                        frame,
                        fps,
                        delay,
                        config: {
                            damping: 10,
                            stiffness: 80,
                            mass: 0.8
                        }
                    });
                    const cardScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        0.3,
                        1
                    ]);
                    const cardY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        100,
                        0
                    ]);
                    const cardOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        0,
                        1
                    ]);
                    const cardRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(cardSpring, [
                        0,
                        1
                    ], [
                        10,
                        0
                    ]);
                    // Counting animation
                    const countProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
                        delay,
                        delay + 1.5 * fps
                    ], [
                        0,
                        1
                    ], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
                    });
                    const displayValue = Math.round(metric.value * countProgress);
                    // Progress bar animation
                    const barProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
                        delay + 0.3 * fps,
                        delay + 1.8 * fps
                    ], [
                        0,
                        1
                    ], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
                    });
                    // Glow pulse
                    const glowIntensity = 0.3 + 0.15 * Math.sin(frame * 0.05 + i * 1.3);
                    // Ring animation around number
                    const ringProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
                        delay + 0.5 * fps,
                        delay + 2 * fps
                    ], [
                        0,
                        360
                    ], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
                    });
                    const cardWidth = isVertical ? 460 : 340;
                    const cardPadding = isVertical ? "36px 28px" : "40px 30px";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            transform: `scale(${cardScale}) translateY(${cardY}px) rotate(${cardRotate}deg)`,
                            opacity: cardOpacity,
                            width: cardWidth,
                            padding: cardPadding,
                            borderRadius: 20,
                            backgroundColor: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(157,255,32,0.08)",
                            position: "relative",
                            boxSizing: "border-box"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 12,
                                    right: 16,
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    background: `conic-gradient(${metric.color}44 ${ringProgress}deg, transparent ${ringProgress}deg)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 16,
                                        height: 16,
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(5,5,8,0.9)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/scenes/Metrics.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/scenes/Metrics.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: numberFontSize,
                                    fontWeight: 900,
                                    color: metric.color,
                                    lineHeight: 1,
                                    textShadow: `0 0 ${40 * glowIntensity}px ${metric.color}66`
                                },
                                children: [
                                    metric.prefix,
                                    displayValue,
                                    metric.suffix
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/scenes/Metrics.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: isVertical ? 18 : 20,
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    marginTop: 14,
                                    letterSpacing: 2,
                                    textTransform: "uppercase"
                                },
                                children: metric.label
                            }, void 0, false, {
                                fileName: "[project]/src/scenes/Metrics.tsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: 3,
                                    backgroundColor: "rgba(255,255,255,0.06)",
                                    borderRadius: 2,
                                    marginTop: 16,
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: `${barProgress * 100}%`,
                                        height: "100%",
                                        backgroundColor: metric.color,
                                        borderRadius: 2,
                                        boxShadow: `0 0 10px ${metric.color}66`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/scenes/Metrics.tsx",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/scenes/Metrics.tsx",
                                lineNumber: 275,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: isVertical ? 12 : 12,
                                    fontWeight: 400,
                                    color: "rgba(255,255,255,0.4)",
                                    marginTop: 12,
                                    letterSpacing: 1
                                },
                                children: metric.sublabel
                            }, void 0, false, {
                                fileName: "[project]/src/scenes/Metrics.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/scenes/Metrics.tsx",
                        lineNumber: 205,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/scenes/Metrics.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: isVertical ? 50 : 30,
                    left: 0,
                    right: 0,
                    opacity: taglineOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    padding: isVertical ? "0 30px" : 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 30,
                            height: 1,
                            backgroundColor: "rgba(157,255,32,0.3)",
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Metrics.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: isVertical ? 12 : 14,
                            fontWeight: 400,
                            color: "rgba(255,255,255,0.45)",
                            letterSpacing: isVertical ? 2 : 3,
                            textTransform: "uppercase",
                            textAlign: "center"
                        },
                        children: "Presencia en 8 países · Operaciones desde Miami, FL"
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Metrics.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 30,
                            height: 1,
                            backgroundColor: "rgba(157,255,32,0.3)",
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Metrics.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/scenes/Metrics.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/scenes/Metrics.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/scenes/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/google-fonts/dist/esm/Montserrat.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const { fontFamily } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$google$2d$fonts$2f$dist$2f$esm$2f$Montserrat$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadFont"])("normal", {
    weights: [
        "400",
        "600",
        "700",
        "900"
    ],
    subsets: [
        "latin"
    ]
});
const contactItems = [
    {
        icon: "🌐",
        label: "lait.com.co"
    },
    {
        icon: "✉️",
        label: "contacto@lait.com.co"
    },
    {
        icon: "📱",
        label: "+57 (350) 219 0068"
    }
];
const Contact = ()=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const isVertical = height > width;
    // Logo entrance with bounce
    const logoSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        config: {
            damping: 10,
            stiffness: 80,
            mass: 0.8
        }
    });
    const logoScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(logoSpring, [
        0,
        1
    ], [
        0.2,
        1
    ]);
    const logoOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(logoSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const logoRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(logoSpring, [
        0,
        1
    ], [
        180,
        0
    ]);
    // Logo floating
    const logoFloat = Math.sin(frame * 0.04) * 5;
    // CTA text
    const ctaSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: Math.round(0.5 * fps),
        config: {
            damping: 12,
            stiffness: 80
        }
    });
    const ctaY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(ctaSpring, [
        0,
        1
    ], [
        60,
        0
    ]);
    const ctaOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(ctaSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const ctaScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(ctaSpring, [
        0,
        1
    ], [
        0.7,
        1
    ]);
    // Subtitle
    const subSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: Math.round(0.8 * fps),
        config: {
            damping: 200
        }
    });
    const subOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(subSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    // Accent line
    const lineWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        1 * fps,
        1.8 * fps
    ], [
        0,
        isVertical ? 250 : 300
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad)
    });
    // Pulsing glow
    const pulsePhase = 0.25 + 0.12 * Math.sin(frame * 0.07);
    // Ring animation
    const ringRotation = frame * 0.2;
    const ringOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0.3 * fps,
        0.8 * fps
    ], [
        0,
        0.4
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    // Location
    const locationSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
        frame,
        fps,
        delay: Math.round(2.2 * fps),
        config: {
            damping: 200
        }
    });
    const locationOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(locationSpring, [
        0,
        1
    ], [
        0,
        1
    ]);
    const logoSize = isVertical ? 160 : 160;
    const ctaFontSize = isVertical ? 38 : 44;
    // Vertical layout positions
    const logoTop = isVertical ? "25%" : "35%";
    const contentTop = isVertical ? "48%" : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedBackground"], {
                showGrid: false,
                showImage: true,
                imageOpacity: 0.1
            }, void 0, false, {
                fileName: "[project]/src/scenes/Contact.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingParticles"], {
                color: "#9DFF20",
                count: 15
            }, void 0, false, {
                fileName: "[project]/src/scenes/Contact.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: logoTop,
                    transform: "translate(-50%, -50%)",
                    width: isVertical ? 450 : 600,
                    height: isVertical ? 450 : 600,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(157,255,32,0.2) 0%, transparent 70%)",
                    opacity: pulsePhase,
                    filter: "blur(60px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/Contact.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            [
                {
                    size: isVertical ? 260 : 280,
                    border: "1px solid rgba(157,255,32,0.15)",
                    rot: ringRotation
                },
                {
                    size: isVertical ? 320 : 340,
                    border: "1px dashed rgba(157,255,32,0.08)",
                    rot: -ringRotation * 0.6
                },
                {
                    size: isVertical ? 380 : 400,
                    border: "1px solid rgba(157,255,32,0.04)",
                    rot: ringRotation * 0.3
                }
            ].map((ring, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: "50%",
                        top: logoTop,
                        transform: `translate(-50%, -50%) rotate(${ring.rot}deg)`,
                        width: ring.size,
                        height: ring.size,
                        borderRadius: "50%",
                        border: ring.border,
                        opacity: ringOpacity * (1 - idx * 0.2)
                    }
                }, idx, false, {
                    fileName: "[project]/src/scenes/Contact.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: logoTop,
                    transform: `translate(-50%, -50%) scale(${logoScale}) rotate(${logoRotate}deg) translateY(${logoFloat}px)`,
                    opacity: logoOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticFile"])("logo.png"),
                    style: {
                        width: logoSize,
                        height: logoSize,
                        filter: "drop-shadow(0 0 30px rgba(157,255,32,0.4))"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/scenes/Contact.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/scenes/Contact.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: isVertical ? contentTop : "58%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: isVertical ? "90%" : "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: ctaOpacity,
                            transform: `translateY(${ctaY}px) scale(${ctaScale})`,
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: ctaFontSize,
                                fontWeight: 900,
                                color: "#FFFFFF",
                                letterSpacing: 2
                            },
                            children: [
                                "Apostamos a",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#9DFF20",
                                        textShadow: "0 0 30px rgba(157,255,32,0.5)"
                                    },
                                    children: "LATAM"
                                }, void 0, false, {
                                    fileName: "[project]/src/scenes/Contact.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/scenes/Contact.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Contact.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: subOpacity,
                            fontSize: isVertical ? 17 : 20,
                            fontWeight: 400,
                            color: "rgba(255,255,255,0.6)",
                            marginTop: 10,
                            letterSpacing: 1,
                            textAlign: "center"
                        },
                        children: "Para cerrar la brecha tecnológica del continente"
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Contact.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: lineWidth,
                            height: 2,
                            marginTop: 30,
                            background: "linear-gradient(90deg, transparent, #9DFF20, transparent)",
                            boxShadow: "0 0 15px rgba(157,255,32,0.3)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Contact.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: isVertical ? "column" : "row",
                            gap: isVertical ? 16 : 50,
                            marginTop: 36,
                            alignItems: "center"
                        },
                        children: contactItems.map((item, i)=>{
                            const itemSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                                frame,
                                fps,
                                delay: Math.round(1.5 * fps + i * 0.15 * fps),
                                config: {
                                    damping: 12,
                                    stiffness: 80
                                }
                            });
                            const itemScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(itemSpring, [
                                0,
                                1
                            ], [
                                0.5,
                                1
                            ]);
                            const itemOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(itemSpring, [
                                0,
                                1
                            ], [
                                0,
                                1
                            ]);
                            const itemX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(itemSpring, [
                                0,
                                1
                            ], [
                                isVertical ? i % 2 === 0 ? -200 : 200 : 0,
                                0
                            ]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    transform: `scale(${itemScale}) translateX(${itemX}px)`,
                                    opacity: itemOpacity,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: isVertical ? "12px 30px" : "10px 20px",
                                    borderRadius: 30,
                                    backgroundColor: "rgba(157,255,32,0.05)",
                                    border: "1px solid rgba(157,255,32,0.12)",
                                    minWidth: isVertical ? 300 : undefined,
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 16
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/scenes/Contact.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: isVertical ? 15 : 15,
                                            fontWeight: 600,
                                            color: "rgba(255,255,255,0.85)",
                                            letterSpacing: 0.5
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/scenes/Contact.tsx",
                                        lineNumber: 279,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/scenes/Contact.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/scenes/Contact.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/scenes/Contact.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: isVertical ? 80 : 50,
                    left: 0,
                    right: 0,
                    opacity: locationOpacity,
                    textAlign: "center",
                    padding: isVertical ? "0 40px" : 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: isVertical ? 13 : 14,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.5)",
                        letterSpacing: isVertical ? 2 : 3,
                        textTransform: "uppercase"
                    },
                    children: "800 Brickell Ave, Miami FL · Presencia en 8 países"
                }, void 0, false, {
                    fileName: "[project]/src/scenes/Contact.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/scenes/Contact.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "linear-gradient(90deg, transparent, #9DFF20, transparent)",
                    opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
                        3 * fps,
                        3.5 * fps
                    ], [
                        0,
                        0.6
                    ], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp"
                    })
                }
            }, void 0, false, {
                fileName: "[project]/src/scenes/Contact.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/scenes/Contact.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[project]/src/components/AnimatedLayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedLayer",
    ()=>AnimatedLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
;
;
// ─────────────────────────────────────────────────────────────────────────────
// Easing helpers — map our EasingType to Remotion Easing
// ─────────────────────────────────────────────────────────────────────────────
function getEasingFn(config) {
    const base = config.easing === "bezier" && config.bezierParams ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].bezier(config.bezierParams[0], config.bezierParams[1], config.bezierParams[2], config.bezierParams[3]) : config.easing === "quad" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].quad : config.easing === "cubic" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].cubic : config.easing === "sin" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].sin : config.easing === "exp" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].exp : config.easing === "circle" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].circle : config.easing === "elastic" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].elastic(1) : config.easing === "bounce" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].bounce : config.easing === "back" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].back(1) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].linear;
    const variant = config.easingVariant ?? "in";
    if (variant === "out") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].out(base);
    if (variant === "inOut") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].inOut(base);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Easing"].in(base);
}
// ─────────────────────────────────────────────────────────────────────────────
// Layout helpers
// ─────────────────────────────────────────────────────────────────────────────
function getLayoutStyle(layout, width, height) {
    const w = layout.width ?? 200;
    const h = layout.height ?? 200;
    const anchor = layout.anchor ?? "center";
    const anchorOffsets = {
        "top-left": {
            x: 0,
            y: 0
        },
        "top-center": {
            x: -w / 2,
            y: 0
        },
        "top-right": {
            x: -w,
            y: 0
        },
        "center-left": {
            x: 0,
            y: -h / 2
        },
        center: {
            x: -w / 2,
            y: -h / 2
        },
        "center-right": {
            x: -w,
            y: -h / 2
        },
        "bottom-left": {
            x: 0,
            y: -h
        },
        "bottom-center": {
            x: -w / 2,
            y: -h
        },
        "bottom-right": {
            x: -w,
            y: -h
        }
    };
    const { x: ax, y: ay } = anchorOffsets[anchor];
    return {
        position: "absolute",
        left: layout.x + ax,
        top: layout.y + ay,
        width: w,
        height: h
    };
}
const AnimatedLayer = ({ config, durationInFrames, children, fullFill = false })=>{
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const entrance = config?.entrance;
    const exit = config?.exit;
    const layout = config?.layout;
    let opacity = 1;
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    // Entrance animation
    if (entrance) {
        const delay = entrance.delayInFrames ?? 0;
        const dur = entrance.durationInFrames;
        const start = delay;
        const end = delay + dur;
        if (entrance.type === "spring") {
            const driver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                frame: Math.max(0, frame - delay),
                fps,
                config: {
                    damping: entrance.springConfig?.damping ?? 20,
                    stiffness: entrance.springConfig?.stiffness ?? 100,
                    mass: entrance.springConfig?.mass ?? 1
                }
            });
            opacity = driver;
            scale = driver;
        } else {
            const inputFrame = Math.max(0, Math.min(frame - delay, dur));
            const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(inputFrame, [
                0,
                dur
            ], [
                0,
                1
            ], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: entrance.easing ? getEasingFn(entrance) : undefined
            });
            if (entrance.type === "fade") opacity = progress;
            else if (entrance.type === "scale") scale = progress;
            else if (entrance.type === "slide") {
                translateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(progress, [
                    0,
                    1
                ], [
                    30,
                    0
                ]);
            }
        }
    }
    // Exit animation (at end of sequence)
    if (exit) {
        const exitStart = durationInFrames - exit.durationInFrames - (exit.delayInFrames ?? 0);
        const exitEnd = durationInFrames;
        if (frame >= exitStart) {
            const localFrame = frame - exitStart;
            const dur = exit.durationInFrames;
            if (exit.type === "spring") {
                const driver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spring"])({
                    frame: localFrame,
                    fps,
                    config: {
                        damping: exit.springConfig?.damping ?? 20,
                        stiffness: exit.springConfig?.stiffness ?? 100
                    },
                    reverse: true
                });
                opacity = Math.min(opacity, driver);
                scale = Math.min(scale, driver);
            } else {
                const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(localFrame, [
                    0,
                    dur
                ], [
                    0,
                    1
                ], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: exit.easing ? getEasingFn(exit) : undefined
                });
                if (exit.type === "fade") opacity = Math.min(opacity, 1 - progress);
                else if (exit.type === "scale") scale = Math.min(scale, 1 - progress);
                else if (exit.type === "slide") {
                    translateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(progress, [
                        0,
                        1
                    ], [
                        0,
                        -30
                    ]);
                }
            }
        }
    }
    const transform = `scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`;
    if (fullFill) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                opacity,
                transform
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedLayer.tsx",
            lineNumber: 201,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (layout) {
        const layoutStyle = getLayoutStyle(layout, width, height);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                ...layoutStyle,
                opacity,
                transform,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedLayer.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            opacity,
            transform
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedLayer.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/scenes/MediaScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaScene",
    ()=>MediaScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$media$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/media/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$gif$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/gif/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$lottie$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/lottie/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedLayer.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// ─────────────────────────────────────────────────────────────────────────────
// Image
// ─────────────────────────────────────────────────────────────────────────────
function ImageLayer({ data, sequence }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
        src: data.src,
        style: {
            width: "100%",
            height: "100%",
            objectFit: data.fit ?? "contain",
            objectPosition: data.objectPosition
        }
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLayer"], {
        config: sequence.animationConfig,
        durationInFrames: sequence.durationInFrames,
        fullFill: !sequence.animationConfig?.layout,
        children: sequence.animationConfig?.layout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "100%",
                    maxHeight: "100%"
                },
                children: content
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 46,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
// Video
// ─────────────────────────────────────────────────────────────────────────────
function VideoLayer({ data, sequence }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$media$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Video"], {
        src: data.src,
        volume: data.volume ?? 1,
        playbackRate: data.playbackRate ?? 1,
        loop: data.loop ?? false,
        trimBefore: data.trimBefore,
        trimAfter: data.trimAfter,
        style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLayer"], {
        config: sequence.animationConfig,
        durationInFrames: sequence.durationInFrames,
        fullFill: !sequence.animationConfig?.layout,
        children: sequence.animationConfig?.layout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 79,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
// Audio (no visual; just plays)
// ─────────────────────────────────────────────────────────────────────────────
function AudioLayer({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$media$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Audio"], {
        src: data.src,
        volume: data.volume ?? 1,
        loop: data.loop ?? false
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
// GIF
// ─────────────────────────────────────────────────────────────────────────────
function GifLayer({ data, sequence }) {
    const w = data.width ?? 400;
    const h = data.height ?? 400;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$gif$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Gif"], {
        src: data.src,
        width: w,
        height: h
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 106,
        columnNumber: 19
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLayer"], {
        config: sequence.animationConfig,
        durationInFrames: sequence.durationInFrames,
        fullFill: !sequence.animationConfig?.layout,
        children: sequence.animationConfig?.layout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 115,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                alignItems: "center",
                justifyContent: "center"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 117,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
// AnimatedImage (GIF/APNG/WebP via ImageDecoder)
// ─────────────────────────────────────────────────────────────────────────────
function AnimatedImageLayer({ data, sequence }) {
    const w = data.width ?? 400;
    const h = data.height ?? 400;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedImage"], {
        src: data.src,
        width: w,
        height: h,
        fit: data.fit ?? "contain",
        playbackRate: data.playbackRate ?? 1,
        loopBehavior: data.loopBehavior ?? "loop"
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLayer"], {
        config: sequence.animationConfig,
        durationInFrames: sequence.durationInFrames,
        fullFill: !sequence.animationConfig?.layout,
        children: sequence.animationConfig?.layout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 156,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                alignItems: "center",
                justifyContent: "center"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 158,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
// Lottie
// ─────────────────────────────────────────────────────────────────────────────
function LottieLayer({ data, sequence }) {
    const [handle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["delayRender"])("Loading Lottie"));
    const [animationData, setAnimationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch(data.src).then((r)=>r.json()).then((json)=>{
            setAnimationData(json);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["continueRender"])(handle);
        }).catch((err)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelRender"])(err));
    }, [
        data.src,
        handle
    ]);
    if (!animationData) return null;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$lottie$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lottie"], {
        animationData: animationData,
        loop: data.loop ?? true,
        style: {
            width: 400,
            height: 400
        }
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLayer"], {
        config: sequence.animationConfig,
        durationInFrames: sequence.durationInFrames,
        fullFill: !sequence.animationConfig?.layout,
        children: sequence.animationConfig?.layout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 201,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                alignItems: "center",
                justifyContent: "center"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 203,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
// Text
// ─────────────────────────────────────────────────────────────────────────────
function TextLayer({ data, sequence }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: data.fontFamily ?? "Inter, sans-serif",
            fontSize: data.fontSize ?? 48,
            color: data.color ?? "#ffffff",
            textAlign: data.align ?? "center",
            fontWeight: data.fontWeight ?? "400",
            padding: 24
        },
        children: data.text || "Texto"
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLayer"], {
        config: sequence.animationConfig,
        durationInFrames: sequence.durationInFrames,
        fullFill: !sequence.animationConfig?.layout,
        children: sequence.animationConfig?.layout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%",
                overflow: "hidden"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 238,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                alignItems: "center",
                justifyContent: "center"
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/scenes/MediaScene.tsx",
            lineNumber: 242,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/scenes/MediaScene.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
function MediaScene({ sequence }) {
    const data = sequence.sceneData;
    const type = sequence.sceneType;
    switch(type){
        case "image":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageLayer, {
                data: data,
                sequence: sequence
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 260,
                columnNumber: 14
            }, this);
        case "video":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoLayer, {
                data: data,
                sequence: sequence
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 262,
                columnNumber: 14
            }, this);
        case "audio":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioLayer, {
                data: data
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 264,
                columnNumber: 14
            }, this);
        case "gif":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GifLayer, {
                data: data,
                sequence: sequence
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 266,
                columnNumber: 14
            }, this);
        case "animated-image":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedImageLayer, {
                data: data,
                sequence: sequence
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 268,
                columnNumber: 14
            }, this);
        case "lottie":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LottieLayer, {
                data: data,
                sequence: sequence
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 270,
                columnNumber: 14
            }, this);
        case "text":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextLayer, {
                data: data,
                sequence: sequence
            }, void 0, false, {
                fileName: "[project]/src/scenes/MediaScene.tsx",
                lineNumber: 272,
                columnNumber: 14
            }, this);
        default:
            return null;
    }
}
}),
"[project]/src/Composition.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicComposition",
    ()=>DynamicComposition,
    "MyComposition",
    ()=>MyComposition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/transitions/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$fade$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/transitions/dist/esm/fade.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$slide$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/transitions/dist/esm/slide.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$wipe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/transitions/dist/esm/wipe.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$flip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/transitions/dist/esm/flip.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$clock$2d$wipe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/transitions/dist/esm/clock-wipe.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$LogoCurtain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scenes/LogoCurtain.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scenes/Intro.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Services$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scenes/Services.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Products$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scenes/Products.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Metrics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scenes/Metrics.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scenes/Contact.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$MediaScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scenes/MediaScene.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// ─────────────────────────────────────────────────────────────────────────────
// Presentation helpers
// ─────────────────────────────────────────────────────────────────────────────
function getPresentation(t, width, height) {
    switch(t.type){
        case "slide":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$slide$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slide"])({
                direction: t.direction ?? "from-right"
            });
        case "wipe":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$wipe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wipe"])({
                direction: t.direction ?? "from-left"
            });
        case "flip":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$flip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flip"])();
        case "clock-wipe":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$clock$2d$wipe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clockWipe"])({
                width,
                height
            });
        case "none":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$fade$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fade"])(); // unused when type is none (transition skipped)
        case "fade":
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$fade$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fade"])();
    }
}
function getTiming(t) {
    return t.timing === "spring" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["springTiming"])({
        config: {
            damping: t.springConfig?.damping ?? 200,
            stiffness: t.springConfig?.stiffness ?? 100
        },
        durationInFrames: t.durationInFrames
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linearTiming"])({
        durationInFrames: t.durationInFrames
    });
}
// ─────────────────────────────────────────────────────────────────────────────
// Scene registry
// TODO: pasar sceneData como props cuando cada escena sea parametrizable
// ─────────────────────────────────────────────────────────────────────────────
function SceneRenderer({ sequence }) {
    switch(sequence.sceneType){
        case "logo-curtain":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$LogoCurtain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoCurtain"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 75,
                columnNumber: 14
            }, this);
        case "intro":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Intro"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 77,
                columnNumber: 14
            }, this);
        case "services":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Services$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Services"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 79,
                columnNumber: 14
            }, this);
        case "products":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Products$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Products"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 81,
                columnNumber: 14
            }, this);
        case "metrics":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Metrics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Metrics"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 83,
                columnNumber: 14
            }, this);
        case "contact":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 85,
                columnNumber: 14
            }, this);
        case "image":
        case "video":
        case "audio":
        case "gif":
        case "animated-image":
        case "lottie":
        case "text":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$MediaScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaScene"], {
                sequence: sequence
            }, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 93,
                columnNumber: 14
            }, this);
        case "captions":
        case "three-canvas":
        case "light-leak":
            // TODO: implement captions, three-canvas, light-leak
            return null;
        default:
            return null;
    }
}
// ─────────────────────────────────────────────────────────────────────────────
// DynamicComposition — renderiza sequences desde Firestore vía inputProps
// Solo recibe datos de la DB (VideoPlayer) o vacío (Remotion Studio)
// ─────────────────────────────────────────────────────────────────────────────
/** Obtiene el frame de inicio de una secuencia (explícito o calculado desde order) */ function getSequenceFrom(seq, sorted, computedFromMap) {
    if (seq.from !== undefined) return seq.from;
    return computedFromMap.get(seq.id) ?? 0;
}
const DynamicComposition = ({ sequences = [] })=>{
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const sorted = [
        ...sequences
    ].sort((a, b)=>a.order - b.order);
    const computedFromMap = React.useMemo(()=>{
        const map = new Map();
        let acc = 0;
        for(let i = 0; i < sorted.length; i++){
            const seq = sorted[i];
            const from = seq.from ?? acc;
            map.set(seq.id, from);
            const overlap = i < sorted.length - 1 && seq.transition ? seq.transition.durationInFrames : 0;
            acc = from + seq.durationInFrames - overlap;
        }
        return map;
    }, [
        sorted
    ]);
    const hasExplicitFrom = sequences.some((s)=>s.from !== undefined);
    if (sorted.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                backgroundColor: "#050508",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.3)",
                fontSize: 14
            },
            children: "Sin secuencias — carga datos desde Firestore"
        }, void 0, false, {
            fileName: "[project]/src/Composition.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (hasExplicitFrom) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
            style: {
                backgroundColor: "#050508"
            },
            children: sorted.map((seq)=>{
                const fromFrame = getSequenceFrom(seq, sorted, computedFromMap);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sequence"], {
                    from: fromFrame,
                    durationInFrames: seq.durationInFrames,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneRenderer, {
                        sequence: seq
                    }, void 0, false, {
                        fileName: "[project]/src/Composition.tsx",
                        lineNumber: 170,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, seq.id, false, {
                    fileName: "[project]/src/Composition.tsx",
                    lineNumber: 165,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/Composition.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            backgroundColor: "#050508"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionSeries"], {
            children: sorted.map((seq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionSeries"].Sequence, {
                            durationInFrames: seq.durationInFrames,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneRenderer, {
                                sequence: seq
                            }, void 0, false, {
                                fileName: "[project]/src/Composition.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, seq.id, false, {
                            fileName: "[project]/src/Composition.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        seq.transition && seq.transition.type !== "none" && index < sorted.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionSeries"].Transition, {
                            presentation: getPresentation(seq.transition, width, height),
                            timing: getTiming(seq.transition)
                        }, `t-${seq.id}`, false, {
                            fileName: "[project]/src/Composition.tsx",
                            lineNumber: 193,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true))
        }, void 0, false, {
            fileName: "[project]/src/Composition.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/Composition.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MyComposition = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicComposition, {
        sequences: []
    }, void 0, false, {
        fileName: "[project]/src/Composition.tsx",
        lineNumber: 210,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/app/VideoPlayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/player/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Composition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Composition.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function VideoPlayer({ composition }) {
    if (!composition) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                maxWidth: 960,
                padding: 48,
                borderRadius: 12,
                border: "1px dashed rgba(157,255,32,0.3)",
                background: "rgba(157,255,32,0.04)",
                textAlign: "center",
                color: "rgba(255,255,255,0.5)",
                fontSize: 14
            },
            children: "Sin composiciones en la base de datos. Usa el botón flotante para inicializar la colección."
        }, void 0, false, {
            fileName: "[project]/app/VideoPlayer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    const { fps, width, height, sequences, totalDurationInFrames } = composition;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            maxWidth: 960,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 0 0 1px rgba(157,255,32,0.15), 0 24px 80px rgba(0,0,0,0.6)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Player"], {
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Composition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicComposition"],
            inputProps: {
                sequences
            },
            durationInFrames: totalDurationInFrames,
            fps: fps,
            compositionWidth: width,
            compositionHeight: height,
            style: {
                width: "100%"
            },
            controls: true,
            loop: true,
            autoPlay: false,
            clickToPlay: true,
            acknowledgeRemotionLicense: true
        }, void 0, false, {
            fileName: "[project]/app/VideoPlayer.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/VideoPlayer.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/constants/defaultSequences.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SEQUENCES",
    ()=>DEFAULT_SEQUENCES
]);
const DEFAULT_SEQUENCES = [
    {
        id: "seq-0",
        order: 0,
        sceneType: "logo-curtain",
        durationInFrames: 130,
        sceneData: {
            companyName: "Lait Technology",
            accentColor: "#9DFF20"
        },
        transition: {
            type: "fade",
            durationInFrames: 25,
            timing: "spring"
        }
    },
    {
        id: "seq-1",
        order: 1,
        sceneType: "intro",
        durationInFrames: 150,
        sceneData: {
            companyName: "Lait Technology",
            tagline: "Innovación que transforma",
            accentColor: "#9DFF20"
        },
        transition: {
            type: "fade",
            durationInFrames: 25,
            timing: "spring"
        }
    },
    {
        id: "seq-2",
        order: 2,
        sceneType: "services",
        durationInFrames: 180,
        sceneData: {
            title: "Nuestros Servicios",
            accentColor: "#9DFF20"
        },
        transition: {
            type: "slide",
            direction: "from-right",
            durationInFrames: 25,
            timing: "linear"
        }
    },
    {
        id: "seq-3",
        order: 3,
        sceneType: "products",
        durationInFrames: 150,
        sceneData: {
            title: "Productos Destacados",
            accentColor: "#9DFF20"
        },
        transition: {
            type: "wipe",
            direction: "from-left",
            durationInFrames: 25,
            timing: "linear"
        }
    },
    {
        id: "seq-4",
        order: 4,
        sceneType: "metrics",
        durationInFrames: 150,
        sceneData: {
            title: "Nuestro Impacto",
            accentColor: "#9DFF20"
        },
        transition: {
            type: "fade",
            durationInFrames: 25,
            timing: "spring"
        }
    },
    {
        id: "seq-5",
        order: 5,
        sceneType: "contact",
        durationInFrames: 150,
        sceneData: {
            companyName: "Lait Technology",
            ctaText: "Contáctanos",
            accentColor: "#9DFF20"
        }
    }
];
}),
"[project]/app/dashboard/components/DashboardClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardClient",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/VideoPlayer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$defaultSequences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/defaultSequences.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const API_URL = typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_URL || "";
function DashboardClient({ compositions: initialCompositions, firebaseCredentialError }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [compositions, setCompositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCompositions);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCompositions[0]?.id ?? null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCompositions(initialCompositions);
        setSelectedId((prev)=>{
            const exists = initialCompositions.some((c)=>c.id === prev);
            return exists ? prev : initialCompositions[0]?.id ?? null;
        });
    }, [
        initialCompositions
    ]);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createError, setCreateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const selected = compositions.find((c)=>c.id === selectedId) ?? compositions[0];
    const handleCreateComposition = async ()=>{
        setCreating(true);
        setCreateError(null);
        try {
            const res = await fetch(`${API_URL || ""}/api/compositions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    title: `Composición ${compositions.length + 1}`,
                    sequences: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$defaultSequences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SEQUENCES"],
                    fps: 30,
                    width: 1920,
                    height: 1080
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error ?? "Error al crear composición");
            }
            setCompositions((prev)=>[
                    data.composition,
                    ...prev
                ]);
            setSelectedId(data.composition.id);
            router.refresh();
        } catch (err) {
            setCreateError(err instanceof Error ? err.message : "Error desconocido");
        } finally{
            setCreating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            firebaseCredentialError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: 960,
                    padding: 16,
                    borderRadius: 8,
                    background: "rgba(255,100,100,0.15)",
                    border: "1px solid rgba(255,100,100,0.3)",
                    color: "#ff6b6b",
                    fontSize: 13,
                    lineHeight: 1.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Error de credenciales Firebase"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: "8px 0 0",
                            opacity: 0.9
                        },
                        children: "(1) Sincroniza la hora del sistema. (2) Regenera la clave en Firebase Console → Configuración → Cuentas de servicio → Generar nueva clave privada. Sustituye el archivo JSON en la raíz del proyecto."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: 960,
                    display: "flex",
                    flexDirection: "column",
                    gap: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCreateComposition,
                                disabled: creating,
                                style: {
                                    padding: "10px 20px",
                                    borderRadius: 8,
                                    border: "1px solid rgba(157,255,32,0.5)",
                                    background: "rgba(157,255,32,0.15)",
                                    color: "#9DFF20",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    letterSpacing: 1,
                                    cursor: creating ? "not-allowed" : "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8
                                },
                                children: creating ? "Creando…" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 18
                                            },
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        "Nueva composición"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            createError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12,
                                    color: "#ff6b6b"
                                },
                                children: createError
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            compositions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 8
                                },
                                children: compositions.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedId(c.id),
                                        style: {
                                            padding: "8px 14px",
                                            borderRadius: 8,
                                            border: selectedId === c.id ? "1px solid #9DFF20" : "1px solid rgba(255,255,255,0.2)",
                                            background: selectedId === c.id ? "rgba(157,255,32,0.15)" : "rgba(255,255,255,0.05)",
                                            color: selectedId === c.id ? "#9DFF20" : "rgba(255,255,255,0.8)",
                                            fontSize: 12,
                                            cursor: "pointer"
                                        },
                                        children: c.title
                                    }, c.id, false, {
                                        fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        composition: selected
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/editor?id=${selected.id}`,
                                style: {
                                    padding: "8px 16px",
                                    borderRadius: 8,
                                    border: "1px solid rgba(157,255,32,0.3)",
                                    background: "rgba(157,255,32,0.08)",
                                    color: "#9DFF20",
                                    fontSize: 13,
                                    textDecoration: "none",
                                    letterSpacing: 1
                                },
                                children: "Editar en Remotion Studio"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(255,255,255,0.2)",
                                    fontSize: 11,
                                    letterSpacing: 1,
                                    margin: 0
                                },
                                children: [
                                    selected.sequences.length,
                                    " escenas ·",
                                    " ",
                                    (selected.totalDurationInFrames / selected.fps).toFixed(1),
                                    "s ·",
                                    " ",
                                    selected.width,
                                    "×",
                                    selected.height,
                                    " · ",
                                    selected.fps,
                                    "fps"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    compositions.length === 0 && !creating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "rgba(255,255,255,0.4)",
                            fontSize: 13,
                            textAlign: "center"
                        },
                        children: 'No hay composiciones. Haz clic en "Nueva composición" para crear una.'
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/components/DashboardClient.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f9516703._.js.map