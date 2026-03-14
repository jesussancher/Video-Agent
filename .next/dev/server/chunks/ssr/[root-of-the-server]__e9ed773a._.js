module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
                lineNumber: 76,
                columnNumber: 14
            }, this);
        case "intro":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Intro"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 78,
                columnNumber: 14
            }, this);
        case "services":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Services$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Services"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 80,
                columnNumber: 14
            }, this);
        case "products":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Products$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Products"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 82,
                columnNumber: 14
            }, this);
        case "metrics":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Metrics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Metrics"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 84,
                columnNumber: 14
            }, this);
        case "contact":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scenes$2f$Contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                fileName: "[project]/src/Composition.tsx",
                lineNumber: 86,
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
                lineNumber: 94,
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
/** Obtiene el frame de inicio de una secuencia (explícito o calculado desde order) */ function getSequenceFrom(seq, _sorted, computedFromMap) {
    if (seq.from !== undefined) return seq.from;
    return computedFromMap.get(seq.id) ?? 0;
}
const DynamicComposition = ({ sequences = [] })=>{
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...sequences
        ].sort((a, b)=>a.order - b.order), [
        sequences
    ]);
    const computedFromMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
            lineNumber: 149,
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
                        lineNumber: 174,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, seq.id, false, {
                    fileName: "[project]/src/Composition.tsx",
                    lineNumber: 169,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/Composition.tsx",
            lineNumber: 165,
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
                                lineNumber: 191,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, seq.id, false, {
                            fileName: "[project]/src/Composition.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        seq.transition && seq.transition.type !== "none" && index < sorted.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$transitions$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionSeries"].Transition, {
                            presentation: getPresentation(seq.transition, width, height),
                            timing: getTiming(seq.transition)
                        }, `t-${seq.id}`, false, {
                            fileName: "[project]/src/Composition.tsx",
                            lineNumber: 197,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true))
        }, void 0, false, {
            fileName: "[project]/src/Composition.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/Composition.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MyComposition = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicComposition, {
        sequences: []
    }, void 0, false, {
        fileName: "[project]/src/Composition.tsx",
        lineNumber: 214,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/constants/componentPalette.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPONENT_PALETTE_ITEMS",
    ()=>COMPONENT_PALETTE_ITEMS,
    "createSequenceFromType",
    ()=>createSequenceFromType,
    "getCategoryLabel",
    ()=>getCategoryLabel
]);
const COMPONENT_PALETTE_ITEMS = [
    {
        type: "image",
        label: "Imagen",
        category: "media"
    },
    {
        type: "video",
        label: "Video",
        category: "media"
    },
    {
        type: "audio",
        label: "Audio",
        category: "media"
    },
    {
        type: "gif",
        label: "GIF",
        category: "media"
    },
    {
        type: "animated-image",
        label: "Imagen animada",
        category: "media"
    },
    {
        type: "lottie",
        label: "Lottie",
        category: "media"
    },
    {
        type: "text",
        label: "Texto",
        category: "text"
    },
    {
        type: "captions",
        label: "Subtítulos",
        category: "text"
    },
    {
        type: "three-canvas",
        label: "Three.js 3D",
        category: "3d"
    },
    {
        type: "light-leak",
        label: "Light Leak",
        category: "effects"
    },
    {
        type: "logo-curtain",
        label: "Logo / Cortinilla",
        category: "scenes"
    },
    {
        type: "intro",
        label: "Intro",
        category: "scenes"
    },
    {
        type: "services",
        label: "Servicios",
        category: "scenes"
    },
    {
        type: "products",
        label: "Productos",
        category: "scenes"
    },
    {
        type: "metrics",
        label: "Métricas",
        category: "scenes"
    },
    {
        type: "contact",
        label: "Contacto",
        category: "scenes"
    }
];
const CATEGORY_LABELS = {
    media: "Media",
    text: "Texto",
    "3d": "3D",
    effects: "Efectos",
    scenes: "Escenas"
};
function getCategoryLabel(cat) {
    return CATEGORY_LABELS[cat];
}
function getDefaultSceneData(type) {
    switch(type){
        case "image":
            return {
                src: ""
            };
        case "video":
            return {
                src: "",
                volume: 1,
                loop: false
            };
        case "audio":
            return {
                src: "",
                volume: 1,
                loop: false
            };
        case "gif":
            return {
                src: "",
                width: 400,
                height: 400
            };
        case "animated-image":
            return {
                src: "",
                width: 400,
                height: 400,
                fit: "contain"
            };
        case "lottie":
            return {
                src: "",
                loop: true
            };
        case "text":
            return {
                text: "Nuevo texto",
                fontSize: 48,
                color: "#ffffff",
                align: "center"
            };
        case "captions":
            return {
                src: ""
            };
        case "light-leak":
            return {
                seed: 5,
                hueShift: 240
            };
        case "logo-curtain":
            return {
                companyName: "Mi Empresa",
                accentColor: "#9DFF20"
            };
        case "intro":
            return {
                companyName: "Mi Empresa",
                tagline: "Innovación",
                accentColor: "#9DFF20"
            };
        case "services":
            return {
                title: "Servicios",
                accentColor: "#9DFF20"
            };
        case "products":
            return {
                title: "Productos",
                accentColor: "#9DFF20"
            };
        case "metrics":
            return {
                title: "Métricas",
                accentColor: "#9DFF20"
            };
        case "contact":
            return {
                companyName: "Contacto",
                ctaText: "Contáctanos",
                accentColor: "#9DFF20"
            };
        default:
            return {};
    }
}
function createSequenceFromType(type, order, idGenerator, startFrame) {
    return {
        id: idGenerator(),
        order,
        from: startFrame,
        sceneType: type,
        durationInFrames: 90,
        sceneData: getDefaultSceneData(type),
        transition: {
            type: "fade",
            durationInFrames: 15,
            timing: "linear"
        }
    };
}
}),
"[project]/app/editor/components/ComponentPalette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentPalette",
    ()=>ComponentPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/componentPalette.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const PALETTE_STYLE = {
    width: 240,
    minWidth: 240,
    backgroundColor: "#0d0d0f",
    borderRight: "1px solid rgba(157,255,32,0.15)",
    padding: 12,
    overflowY: "auto"
};
const CATEGORY_STYLE = {
    fontSize: 10,
    fontWeight: 600,
    color: "rgba(157,255,32,0.6)",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginTop: 16,
    marginBottom: 8
};
const ITEM_STYLE = {
    padding: "10px 12px",
    borderRadius: 8,
    backgroundColor: "rgba(157,255,32,0.06)",
    border: "1px solid rgba(157,255,32,0.12)",
    color: "#e0e0e0",
    fontSize: 13,
    cursor: "grab",
    marginBottom: 6,
    userSelect: "none"
};
const ITEM_DRAGGING = {
    ...ITEM_STYLE,
    opacity: 0.6,
    cursor: "grabbing"
};
function ComponentPalette({ onDragStart, onDragEnd, onContextMenu }) {
    const [dragging, setDragging] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const handleDragStart = (e, item)=>{
        e.dataTransfer.setData("application/json", JSON.stringify({
            type: item.type
        }));
        e.dataTransfer.effectAllowed = "copy";
        setDragging(item.type);
        onDragStart?.(item.type);
    };
    const handleDragEnd = ()=>{
        setDragging(null);
        onDragEnd?.();
    };
    const categories = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPONENT_PALETTE_ITEMS"].map((i)=>i.category)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: PALETTE_STYLE,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...CATEGORY_STYLE,
                    marginTop: 0
                },
                children: "Componentes"
            }, void 0, false, {
                fileName: "[project]/app/editor/components/ComponentPalette.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    margin: "0 0 12px"
                },
                children: "Arrastra al timeline para agregar"
            }, void 0, false, {
                fileName: "[project]/app/editor/components/ComponentPalette.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: CATEGORY_STYLE,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoryLabel"])(cat)
                        }, void 0, false, {
                            fileName: "[project]/app/editor/components/ComponentPalette.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPONENT_PALETTE_ITEMS"].filter((i)=>i.category === cat).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                draggable: true,
                                onDragStart: (e)=>handleDragStart(e, item),
                                onDragEnd: handleDragEnd,
                                onContextMenu: (e)=>{
                                    e.preventDefault();
                                    onContextMenu?.(e, item.type);
                                },
                                style: dragging === item.type ? ITEM_DRAGGING : ITEM_STYLE,
                                children: item.label
                            }, item.type, false, {
                                fileName: "[project]/app/editor/components/ComponentPalette.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this))
                    ]
                }, cat, true, {
                    fileName: "[project]/app/editor/components/ComponentPalette.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/components/ComponentPalette.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/editor/components/Timeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/componentPalette.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const TIMELINE_HEIGHT = 180;
const TRACK_HEIGHT = 32;
const PIXELS_PER_FRAME = 2;
const RULER_HEIGHT = 24;
function getSequenceLabel(seq) {
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPONENT_PALETTE_ITEMS"].find((i)=>i.type === seq.sceneType);
    return item?.label ?? seq.sceneType;
}
/** Compute start frame for each sequence (for display). Usa seq.from si existe. */ function computeFromFrames(sequences) {
    const sorted = [
        ...sequences
    ].sort((a, b)=>a.order - b.order);
    const map = new Map();
    let acc = 0;
    for(let i = 0; i < sorted.length; i++){
        const seq = sorted[i];
        const from = seq.from !== undefined ? seq.from : acc;
        map.set(seq.id, from);
        const overlap = i < sorted.length - 1 && seq.transition ? seq.transition.durationInFrames : 0;
        acc = from + seq.durationInFrames - overlap;
    }
    return map;
}
const PADDING_LEFT = 8;
function Timeline({ sequences, fps, totalDurationInFrames, currentFrame, onSeek, selectedId, onSelect, onDrop, onChange, onReorder, onMoveInTime, onContextMenu }) {
    const fromFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>computeFromFrames(sequences), [
        sequences
    ]);
    const width = totalDurationInFrames * PIXELS_PER_FRAME;
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropIndicatorOrder, setDropIndicatorOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dragSourceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [timeDrag, setTimeDrag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getFrameFromClientX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clientX)=>{
        const el = scrollRef.current;
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const contentX = clientX - rect.left + el.scrollLeft - PADDING_LEFT;
        const frame = Math.round(contentX / PIXELS_PER_FRAME);
        return Math.max(0, Math.min(frame, Math.max(0, totalDurationInFrames - 1)));
    }, [
        totalDurationInFrames
    ]);
    const handlePlayheadMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        onSeek(getFrameFromClientX(e.clientX));
    }, [
        getFrameFromClientX,
        onSeek
    ]);
    const handlePlayheadClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.stopPropagation();
        onSeek(getFrameFromClientX(e.clientX));
    }, [
        getFrameFromClientX,
        onSeek
    ]);
    const handleRulerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const target = e.target;
        if (target.closest("[data-playhead]")) return;
        onSeek(getFrameFromClientX(e.clientX));
    }, [
        getFrameFromClientX,
        onSeek
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isDragging) return;
        onSeek(getFrameFromClientX(e.clientX));
    }, [
        isDragging,
        getFrameFromClientX,
        onSeek
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsDragging(false);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!isDragging) return;
        const prevSelect = document.body.style.userSelect;
        document.body.style.userSelect = "none";
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return ()=>{
            document.body.style.userSelect = prevSelect;
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [
        isDragging,
        handleMouseMove,
        handleMouseUp
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        const isReorder = dragSourceIdRef.current !== null;
        e.dataTransfer.dropEffect = isReorder ? "move" : "copy";
        if (isReorder) {
            const target = e.target;
            const tracksContainer = target.closest("[data-tracks-container]");
            if (!tracksContainer) {
                setDropIndicatorOrder(sequences.length);
            }
        } else {
            setDropIndicatorOrder(null);
        }
    }, [
        sequences.length
    ]);
    const handleDropAny = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, targetOrder)=>{
        e.preventDefault();
        e.stopPropagation();
        setDropIndicatorOrder(null);
        dragSourceIdRef.current = null;
        try {
            const data = JSON.parse(e.dataTransfer.getData("application/json"));
            if (data?.type === "timeline-clip" && data?.sequenceId && onReorder) {
                onReorder(data.sequenceId, targetOrder);
            } else if (data?.type && typeof data.type === "string") {
                onDrop(data.type);
            }
        } catch  {
        // ignore
        }
    }, [
        onDrop,
        onReorder
    ]);
    const handleTrackDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, sequenceId)=>{
        dragSourceIdRef.current = sequenceId;
        e.dataTransfer.setData("application/json", JSON.stringify({
            type: "timeline-clip",
            sequenceId
        }));
        e.dataTransfer.effectAllowed = "move";
        // Usar imagen de arrastre mínima para que el indicador de drop sea la referencia principal
        const img = document.createElement("div");
        img.style.cssText = "width:1px;height:1px;opacity:0;pointer-events:none;position:absolute;top:-9999px";
        document.body.appendChild(img);
        e.dataTransfer.setDragImage(img, 0, 0);
        requestAnimationFrame(()=>document.body.removeChild(img));
    }, []);
    const handleTrackDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dragSourceIdRef.current = null;
        setDropIndicatorOrder(null);
    }, []);
    const handleDragOverTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, idx)=>{
        e.preventDefault();
        e.stopPropagation();
        const isReorder = dragSourceIdRef.current !== null && onReorder;
        if (isReorder) {
            e.dataTransfer.dropEffect = "move";
            const rect = e.currentTarget.getBoundingClientRect();
            const relY = e.clientY - rect.top;
            const targetOrder = relY < rect.height / 2 ? idx : idx + 1;
            setDropIndicatorOrder(Math.min(targetOrder, sequences.length));
        } else {
            e.dataTransfer.dropEffect = "copy";
            setDropIndicatorOrder(null);
        }
    }, [
        onReorder,
        sequences.length
    ]);
    const handleDragLeaveTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const related = e.relatedTarget;
        const current = e.currentTarget;
        if (!related || !current.contains(related)) {
            setDropIndicatorOrder(null);
        }
    }, []);
    const handleContainerDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const related = e.relatedTarget;
        const scrollEl = scrollRef.current;
        if (scrollEl && (!related || !scrollEl.contains(related))) {
            setDropIndicatorOrder(null);
        }
    }, []);
    const handleTrackClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        onSelect(selectedId === id ? null : id);
    }, [
        selectedId,
        onSelect
    ]);
    const handleClipBarMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, seq)=>{
        if (!onMoveInTime) return;
        e.preventDefault();
        e.stopPropagation();
        setTimeDrag({
            sequenceId: seq.id,
            startFrom: fromFrames.get(seq.id) ?? 0,
            startClientX: e.clientX,
            durationInFrames: seq.durationInFrames
        });
    }, [
        onMoveInTime,
        fromFrames
    ]);
    const handleTimeDragMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!timeDrag || !onMoveInTime) return;
        const deltaX = e.clientX - timeDrag.startClientX;
        const deltaFrames = Math.round(deltaX / PIXELS_PER_FRAME);
        const rawFrom = timeDrag.startFrom + deltaFrames;
        const minFrom = 0;
        const maxFrom = Math.max(0, totalDurationInFrames - timeDrag.durationInFrames);
        const newFrom = Math.max(minFrom, Math.min(rawFrom, maxFrom));
        onMoveInTime(timeDrag.sequenceId, newFrom);
    }, [
        timeDrag,
        onMoveInTime,
        totalDurationInFrames
    ]);
    const handleTimeDragMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTimeDrag(null);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!timeDrag) return;
        const prevSelect = document.body.style.userSelect;
        document.body.style.userSelect = "none";
        document.body.style.cursor = "ew-resize";
        window.addEventListener("mousemove", handleTimeDragMouseMove);
        window.addEventListener("mouseup", handleTimeDragMouseUp);
        return ()=>{
            document.body.style.userSelect = prevSelect;
            document.body.style.cursor = "";
            window.removeEventListener("mousemove", handleTimeDragMouseMove);
            window.removeEventListener("mouseup", handleTimeDragMouseUp);
        };
    }, [
        timeDrag,
        handleTimeDragMouseMove,
        handleTimeDragMouseUp
    ]);
    const handleTrackDurationChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, delta)=>{
        onChange(sequences.map((s)=>s.id === id ? {
                ...s,
                durationInFrames: Math.max(30, s.durationInFrames + delta)
            } : s));
    }, [
        sequences,
        onChange
    ]);
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...sequences
        ].sort((a, b)=>a.order - b.order), [
        sequences
    ]);
    const getInsertOrderFromFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((frame)=>{
        let order = 0;
        for (const s of sorted){
            const from = fromFrames.get(s.id) ?? 0;
            if (frame < from) break;
            order++;
        }
        return order;
    }, [
        sorted,
        fromFrames
    ]);
    const handleRulerContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!onContextMenu) return;
        e.preventDefault();
        e.stopPropagation();
        const frame = getFrameFromClientX(e.clientX);
        const insertOrder = getInsertOrderFromFrame(frame);
        onContextMenu(e, {
            type: "timeline-empty",
            insertOrder,
            frame
        });
    }, [
        onContextMenu,
        getFrameFromClientX,
        getInsertOrderFromFrame
    ]);
    const handleTrackContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, sequenceId)=>{
        if (!onContextMenu) return;
        e.preventDefault();
        e.stopPropagation();
        onContextMenu(e, {
            type: "track",
            sequenceId
        });
    }, [
        onContextMenu
    ]);
    const handleEmptyAreaContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!onContextMenu) return;
        e.preventDefault();
        e.stopPropagation();
        onContextMenu(e, {
            type: "timeline-empty",
            insertOrder: sequences.length,
            frame: 0
        });
    }, [
        onContextMenu,
        sequences.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0a0a0c",
            borderTop: "1px solid rgba(157,255,32,0.15)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollRef,
            style: {
                flex: 1,
                overflowX: "auto",
                overflowY: "auto",
                position: "relative"
            },
            onDragOver: handleDragOver,
            onDragLeave: handleContainerDragLeave,
            onDrop: (e)=>handleDropAny(e, dropIndicatorOrder ?? sequences.length),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minWidth: width + PADDING_LEFT * 2,
                    position: "relative",
                    padding: PADDING_LEFT
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleRulerClick,
                        onContextMenu: handleRulerContextMenu,
                        style: {
                            height: RULER_HEIGHT,
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            fontSize: 10,
                            color: "rgba(255,255,255,0.5)",
                            borderBottom: "1px solid rgba(157,255,32,0.1)",
                            cursor: "pointer"
                        },
                        children: [
                            Array.from({
                                length: Math.ceil(totalDurationInFrames / fps) + 1
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        left: PADDING_LEFT + i * fps * PIXELS_PER_FRAME,
                                        width: 1,
                                        height: RULER_HEIGHT,
                                        backgroundColor: "rgba(255,255,255,0.2)"
                                    }
                                }, i, false, {
                                    fileName: "[project]/app/editor/components/Timeline.tsx",
                                    lineNumber: 403,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "0s"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/Timeline.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "absolute",
                                    right: PADDING_LEFT
                                },
                                children: [
                                    (totalDurationInFrames / fps).toFixed(1),
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/Timeline.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/Timeline.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-playhead": true,
                        onMouseDown: handlePlayheadMouseDown,
                        onClick: handlePlayheadClick,
                        style: {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: PADDING_LEFT + currentFrame * PIXELS_PER_FRAME,
                            width: 2,
                            marginLeft: -1,
                            backgroundColor: "#9DFF20",
                            pointerEvents: "auto",
                            cursor: "ew-resize",
                            zIndex: 10
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: -2,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: 10,
                                height: 10,
                                backgroundColor: "#9DFF20",
                                borderRadius: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/editor/components/Timeline.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/Timeline.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 8,
                            position: "relative"
                        },
                        children: sorted.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onContextMenu: handleEmptyAreaContextMenu,
                            style: {
                                height: 80,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "2px dashed rgba(157,255,32,0.2)",
                                borderRadius: 8,
                                color: "rgba(255,255,255,0.4)",
                                fontSize: 13
                            },
                            children: "Arrastra componentes aquí"
                        }, void 0, false, {
                            fileName: "[project]/app/editor/components/Timeline.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-tracks-container": true,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 6,
                                position: "relative"
                            },
                            children: [
                                dropIndicatorOrder !== null && onReorder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        top: dropIndicatorOrder * (TRACK_HEIGHT + 6) - 2,
                                        height: 4,
                                        borderTop: "2px solid #9DFF20",
                                        boxShadow: "0 0 8px rgba(157,255,32,0.6)",
                                        pointerEvents: "none",
                                        zIndex: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/Timeline.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this),
                                sorted.map((seq, idx)=>{
                                    const from = fromFrames.get(seq.id) ?? 0;
                                    const trackWidth = seq.durationInFrames * PIXELS_PER_FRAME;
                                    const isSelected = selectedId === seq.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onDragOver: (e)=>handleDragOverTrack(e, idx),
                                        onDragLeave: handleDragLeaveTrack,
                                        onDrop: (e)=>{
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            const relY = e.clientY - rect.top;
                                            const targetOrder = relY < rect.height / 2 ? idx : idx + 1;
                                            handleDropAny(e, Math.min(targetOrder, sorted.length));
                                        },
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            height: TRACK_HEIGHT
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                draggable: !!onReorder,
                                                onDragStart: (e)=>onReorder && handleTrackDragStart(e, seq.id),
                                                onDragEnd: handleTrackDragEnd,
                                                style: {
                                                    width: 120,
                                                    fontSize: 12,
                                                    color: "rgba(255,255,255,0.7)",
                                                    flexShrink: 0,
                                                    cursor: onReorder ? "grab" : undefined
                                                },
                                                children: getSequenceLabel(seq)
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/Timeline.tsx",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative",
                                                    width: `${width}px`,
                                                    minWidth: width,
                                                    height: TRACK_HEIGHT - 4
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>handleTrackClick(seq.id),
                                                    onMouseDown: (e)=>handleClipBarMouseDown(e, seq),
                                                    onContextMenu: (e)=>handleTrackContextMenu(e, seq.id),
                                                    style: {
                                                        position: "absolute",
                                                        left: from * PIXELS_PER_FRAME,
                                                        width: trackWidth,
                                                        height: "100%",
                                                        backgroundColor: isSelected ? "rgba(157,255,32,0.25)" : "rgba(157,255,32,0.12)",
                                                        border: `1px solid ${isSelected ? "#9DFF20" : "rgba(157,255,32,0.3)"}`,
                                                        borderRadius: 6,
                                                        cursor: onMoveInTime ? "ew-resize" : "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        paddingLeft: 8,
                                                        fontSize: 11,
                                                        color: `${seq.durationInFrames / fps}s`
                                                    },
                                                    children: [
                                                        (seq.durationInFrames / fps).toFixed(1),
                                                        "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editor/components/Timeline.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/Timeline.tsx",
                                                lineNumber: 533,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, seq.id, true, {
                                        fileName: "[project]/app/editor/components/Timeline.tsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/components/Timeline.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/Timeline.tsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/Timeline.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/editor/components/Timeline.tsx",
            lineNumber: 367,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/editor/components/Timeline.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/editor/components/EasingPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingPicker",
    ()=>EasingPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const EASING_OPTIONS = [
    {
        value: "linear",
        label: "Linear"
    },
    {
        value: "quad",
        label: "Quad"
    },
    {
        value: "cubic",
        label: "Cubic"
    },
    {
        value: "sin",
        label: "Sin"
    },
    {
        value: "exp",
        label: "Exp"
    },
    {
        value: "circle",
        label: "Circle"
    },
    {
        value: "elastic",
        label: "Elastic"
    },
    {
        value: "bounce",
        label: "Bounce"
    },
    {
        value: "back",
        label: "Back"
    },
    {
        value: "bezier",
        label: "Bezier"
    }
];
const VARIANT_OPTIONS = [
    {
        value: "in",
        label: "In"
    },
    {
        value: "out",
        label: "Out"
    },
    {
        value: "inOut",
        label: "In-Out"
    }
];
const INPUT_STYLE = {
    width: "100%",
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid rgba(157,255,32,0.2)",
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    fontSize: 13
};
const LABEL_STYLE = {
    fontSize: 11,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 4
};
function EasingPicker({ value = "linear", variant = "in", bezierParams = [
    0.42,
    0,
    0.58,
    1
], onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: LABEL_STYLE,
                        children: "Curva"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/EasingPicker.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: value,
                        onChange: (e)=>onChange(e.target.value, variant, bezierParams),
                        style: INPUT_STYLE,
                        children: EASING_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: o.value,
                                children: o.label
                            }, o.value, false, {
                                fileName: "[project]/app/editor/components/EasingPicker.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/EasingPicker.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/EasingPicker.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            value !== "bezier" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: LABEL_STYLE,
                        children: "Variante"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/EasingPicker.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: variant,
                        onChange: (e)=>onChange(value, e.target.value, bezierParams),
                        style: INPUT_STYLE,
                        children: VARIANT_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: o.value,
                                children: o.label
                            }, o.value, false, {
                                fileName: "[project]/app/editor/components/EasingPicker.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/EasingPicker.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/EasingPicker.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            value === "bezier" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap"
                },
                children: [
                    0,
                    1,
                    2,
                    3
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 60
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: [
                                    "x1",
                                    "y1",
                                    "x2",
                                    "y2"
                                ][i]
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EasingPicker.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 0,
                                max: 1,
                                step: 0.01,
                                value: bezierParams[i],
                                onChange: (e)=>{
                                    const v = parseFloat(e.target.value) || 0;
                                    const next = [
                                        ...bezierParams
                                    ];
                                    next[i] = Math.max(0, Math.min(1, v));
                                    onChange(value, variant, next);
                                },
                                style: INPUT_STYLE
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EasingPicker.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/editor/components/EasingPicker.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/editor/components/EasingPicker.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/components/EasingPicker.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/editor/components/PropertiesPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertiesPanel",
    ()=>PropertiesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$EasingPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/editor/components/EasingPicker.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const PANEL_STYLE = {
    width: 280,
    minWidth: 280,
    backgroundColor: "#0d0d0f",
    borderLeft: "1px solid rgba(157,255,32,0.15)",
    padding: 16,
    overflowY: "auto"
};
const SECTION_STYLE = {
    marginBottom: 24
};
const SECTION_TITLE = {
    fontSize: 11,
    fontWeight: 600,
    color: "rgba(157,255,32,0.8)",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 12
};
const INPUT_STYLE = {
    width: "100%",
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid rgba(157,255,32,0.2)",
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    fontSize: 13,
    marginBottom: 8
};
const LABEL_STYLE = {
    fontSize: 11,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 4
};
function PropertiesPanel({ sequence, onChange }) {
    if (!sequence) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: PANEL_STYLE,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 13
                },
                children: "Selecciona una secuencia en el timeline"
            }, void 0, false, {
                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    const update = (patch)=>{
        onChange({
            ...sequence,
            ...patch
        });
    };
    const updateSceneData = (patch)=>{
        update({
            sceneData: {
                ...sequence.sceneData,
                ...patch
            }
        });
    };
    const updateTransition = (patch)=>{
        const base = sequence.transition ?? {
            type: "fade",
            durationInFrames: 15,
            timing: "linear"
        };
        update({
            transition: {
                ...base,
                ...patch
            }
        });
    };
    const updateAnimationConfig = (patch)=>{
        update({
            animationConfig: {
                ...sequence.animationConfig,
                ...patch
            }
        });
    };
    const updateEntrance = (patch)=>{
        updateAnimationConfig({
            entrance: {
                ...sequence.animationConfig?.entrance,
                ...patch
            }
        });
    };
    const updateExit = (patch)=>{
        updateAnimationConfig({
            exit: {
                ...sequence.animationConfig?.exit,
                ...patch
            }
        });
    };
    const updateLayout = (patch)=>{
        updateAnimationConfig({
            layout: {
                ...sequence.animationConfig?.layout,
                ...patch
            }
        });
    };
    const transition = sequence.transition ?? {
        type: "fade",
        durationInFrames: 15,
        timing: "linear"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: PANEL_STYLE,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: SECTION_STYLE,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: SECTION_TITLE,
                        children: "General"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "Duración (frames)"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 1,
                                value: sequence.durationInFrames,
                                onChange: (e)=>update({
                                        durationInFrames: Math.max(1, parseInt(e.target.value, 10) || 0)
                                    }),
                                style: INPUT_STYLE
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "Orden"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 0,
                                value: sequence.order,
                                readOnly: true,
                                style: {
                                    ...INPUT_STYLE,
                                    opacity: 0.7
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: SECTION_STYLE,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: SECTION_TITLE,
                        children: "Transición"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "Tipo"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: transition.type,
                                onChange: (e)=>updateTransition({
                                        type: e.target.value
                                    }),
                                style: INPUT_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "fade",
                                        children: "Fade"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "slide",
                                        children: "Slide"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "wipe",
                                        children: "Wipe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "flip",
                                        children: "Flip"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "clock-wipe",
                                        children: "Clock Wipe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "none",
                                        children: "Ninguna"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    (transition.type === "slide" || transition.type === "wipe") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "Dirección"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: transition.direction ?? "from-right",
                                onChange: (e)=>updateTransition({
                                        direction: e.target.value
                                    }),
                                style: INPUT_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "from-left",
                                        children: "Desde izquierda"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "from-right",
                                        children: "Desde derecha"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "from-top",
                                        children: "Desde arriba"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "from-bottom",
                                        children: "Desde abajo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "Duración (frames)"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 0,
                                value: transition.durationInFrames,
                                onChange: (e)=>updateTransition({
                                        durationInFrames: Math.max(0, parseInt(e.target.value, 10) || 0)
                                    }),
                                style: INPUT_STYLE
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "Timing"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: transition.timing,
                                onChange: (e)=>updateTransition({
                                        timing: e.target.value
                                    }),
                                style: INPUT_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "linear",
                                        children: "Linear"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "spring",
                                        children: "Spring"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    transition.timing === "spring" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Damping"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        value: transition.springConfig?.damping ?? 200,
                                        onChange: (e)=>updateTransition({
                                                springConfig: {
                                                    ...transition.springConfig,
                                                    damping: parseInt(e.target.value, 10) || 200
                                                }
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Stiffness"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        value: transition.springConfig?.stiffness ?? 100,
                                        onChange: (e)=>updateTransition({
                                                springConfig: {
                                                    ...transition.springConfig,
                                                    stiffness: parseInt(e.target.value, 10) || 100
                                                }
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: SECTION_STYLE,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: SECTION_TITLE,
                        children: "Animación entrada"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: !!sequence.animationConfig?.entrance,
                                    onChange: (e)=>updateAnimationConfig({
                                            entrance: e.target.checked ? {
                                                type: "fade",
                                                durationInFrames: 20,
                                                easing: "quad",
                                                easingVariant: "out"
                                            } : undefined
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 12,
                                        color: "#ccc"
                                    },
                                    children: "Activar"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    sequence.animationConfig?.entrance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Tipo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sequence.animationConfig.entrance.type,
                                        onChange: (e)=>updateEntrance({
                                                type: e.target.value
                                            }),
                                        style: INPUT_STYLE,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "fade",
                                                children: "Fade"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "slide",
                                                children: "Slide"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "scale",
                                                children: "Scale"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "spring",
                                                children: "Spring"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Duración (frames)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        value: sequence.animationConfig.entrance.durationInFrames,
                                        onChange: (e)=>updateEntrance({
                                                durationInFrames: Math.max(1, parseInt(e.target.value, 10) || 0)
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Curva"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$EasingPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingPicker"], {
                                        value: sequence.animationConfig.entrance.easing ?? "quad",
                                        variant: sequence.animationConfig.entrance.easingVariant ?? "out",
                                        bezierParams: sequence.animationConfig.entrance.bezierParams,
                                        onChange: (easing, variant, bezier)=>updateEntrance({
                                                easing,
                                                easingVariant: variant,
                                                bezierParams: bezier
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: SECTION_STYLE,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: SECTION_TITLE,
                        children: "Animación salida"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: !!sequence.animationConfig?.exit,
                                    onChange: (e)=>updateAnimationConfig({
                                            exit: e.target.checked ? {
                                                type: "fade",
                                                durationInFrames: 20,
                                                easing: "quad",
                                                easingVariant: "in"
                                            } : undefined
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 12,
                                        color: "#ccc"
                                    },
                                    children: "Activar"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    sequence.animationConfig?.exit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Tipo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sequence.animationConfig.exit.type,
                                        onChange: (e)=>updateExit({
                                                type: e.target.value
                                            }),
                                        style: INPUT_STYLE,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "fade",
                                                children: "Fade"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "slide",
                                                children: "Slide"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "scale",
                                                children: "Scale"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "spring",
                                                children: "Spring"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Duración (frames)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        value: sequence.animationConfig.exit.durationInFrames,
                                        onChange: (e)=>updateExit({
                                                durationInFrames: Math.max(1, parseInt(e.target.value, 10) || 0)
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Curva"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$EasingPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingPicker"], {
                                        value: sequence.animationConfig.exit.easing ?? "quad",
                                        variant: sequence.animationConfig.exit.easingVariant ?? "in",
                                        bezierParams: sequence.animationConfig.exit.bezierParams,
                                        onChange: (easing, variant, bezier)=>updateExit({
                                                easing,
                                                easingVariant: variant,
                                                bezierParams: bezier
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            (sequence.sceneType === "image" || sequence.sceneType === "video" || sequence.sceneType === "text" || sequence.sceneType === "gif" || sequence.sceneType === "lottie") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: SECTION_STYLE,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: SECTION_TITLE,
                        children: "Layout"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: !!sequence.animationConfig?.layout,
                                onChange: (e)=>updateAnimationConfig({
                                        layout: e.target.checked ? {
                                            x: 100,
                                            y: 100,
                                            width: 400,
                                            height: 300,
                                            anchor: "center"
                                        } : undefined
                                    })
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12,
                                    color: "#ccc"
                                },
                                children: "Posición personalizada"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this),
                    sequence.animationConfig?.layout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: LABEL_STYLE,
                                                children: "X"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 416,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: sequence.animationConfig.layout.x,
                                                onChange: (e)=>updateLayout({
                                                        x: parseInt(e.target.value, 10) || 0
                                                    }),
                                                style: INPUT_STYLE
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: LABEL_STYLE,
                                                children: "Y"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: sequence.animationConfig.layout.y,
                                                onChange: (e)=>updateLayout({
                                                        y: parseInt(e.target.value, 10) || 0
                                                    }),
                                                style: INPUT_STYLE
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 426,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 414,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: LABEL_STYLE,
                                                children: "Ancho"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 440,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 1,
                                                value: sequence.animationConfig.layout.width ?? 400,
                                                onChange: (e)=>updateLayout({
                                                        width: parseInt(e.target.value, 10) || 400
                                                    }),
                                                style: INPUT_STYLE
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 439,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: LABEL_STYLE,
                                                children: "Alto"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 1,
                                                value: sequence.animationConfig.layout.height ?? 300,
                                                onChange: (e)=>updateLayout({
                                                        height: parseInt(e.target.value, 10) || 300
                                                    }),
                                                style: INPUT_STYLE
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 451,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 438,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Ancla"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sequence.animationConfig.layout.anchor ?? "center",
                                        onChange: (e)=>updateLayout({
                                                anchor: e.target.value
                                            }),
                                        style: INPUT_STYLE,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "top-left",
                                                children: "Arriba izquierda"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 473,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "top-center",
                                                children: "Arriba centro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "top-right",
                                                children: "Arriba derecha"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 475,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "center-left",
                                                children: "Centro izquierda"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 476,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "center",
                                                children: "Centro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "center-right",
                                                children: "Centro derecha"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 478,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "bottom-left",
                                                children: "Abajo izquierda"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 479,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "bottom-center",
                                                children: "Abajo centro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "bottom-right",
                                                children: "Abajo derecha"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                                lineNumber: 481,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                lineNumber: 396,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: SECTION_STYLE,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: SECTION_TITLE,
                        children: "Contenido"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    sequence.sceneType === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "URL imagen"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 494,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "https://...",
                                value: sequence.sceneData.src,
                                onChange: (e)=>updateSceneData({
                                        src: e.target.value
                                    }),
                                style: INPUT_STYLE
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 495,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this),
                    sequence.sceneType === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "URL video"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "https://...",
                                        value: sequence.sceneData.src,
                                        onChange: (e)=>updateSceneData({
                                                src: e.target.value
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Volumen"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        max: 1,
                                        step: 0.1,
                                        value: sequence.sceneData.volume ?? 1,
                                        onChange: (e)=>updateSceneData({
                                                volume: parseFloat(e.target.value) || 1
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    sequence.sceneType === "audio" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: LABEL_STYLE,
                                    children: "URL audio"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "https://...",
                                    value: sequence.sceneData.src,
                                    onChange: (e)=>updateSceneData({
                                            src: e.target.value
                                        }),
                                    style: INPUT_STYLE
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                            lineNumber: 534,
                            columnNumber: 13
                        }, this)
                    }, void 0, false),
                    sequence.sceneType === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Texto"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 3,
                                        value: sequence.sceneData.text,
                                        onChange: (e)=>updateSceneData({
                                                text: e.target.value
                                            }),
                                        style: {
                                            ...INPUT_STYLE,
                                            resize: "vertical"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Tamaño"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 8,
                                        value: sequence.sceneData.fontSize ?? 48,
                                        onChange: (e)=>updateSceneData({
                                                fontSize: parseInt(e.target.value, 10) || 48
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: LABEL_STYLE,
                                        children: "Color"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: sequence.sceneData.color ?? "#ffffff",
                                        onChange: (e)=>updateSceneData({
                                                color: e.target.value
                                            }),
                                        style: INPUT_STYLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    sequence.sceneType === "gif" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "URL GIF"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "https://...",
                                value: sequence.sceneData.src,
                                onChange: (e)=>updateSceneData({
                                        src: e.target.value
                                    }),
                                style: INPUT_STYLE
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    sequence.sceneType === "lottie" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: LABEL_STYLE,
                                children: "URL Lottie JSON"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "https://...",
                                value: sequence.sceneData.src,
                                onChange: (e)=>updateSceneData({
                                        src: e.target.value
                                    }),
                                style: INPUT_STYLE
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                                lineNumber: 595,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/components/PropertiesPanel.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/editor/components/ContextMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenu",
    ()=>ContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const MENU_STYLE = {
    position: "fixed",
    zIndex: 9999,
    minWidth: 180,
    padding: "4px 0",
    backgroundColor: "#121214",
    border: "1px solid rgba(157,255,32,0.2)",
    borderRadius: 8,
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    fontSize: 13
};
const ITEM_STYLE = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 12px",
    color: "rgba(255,255,255,0.9)",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background 0.15s"
};
const ITEM_DISABLED = {
    ...ITEM_STYLE,
    color: "rgba(255,255,255,0.35)",
    cursor: "not-allowed"
};
const SEPARATOR_STYLE = {
    height: 1,
    margin: "4px 8px",
    backgroundColor: "rgba(157,255,32,0.15)"
};
const SHORTCUT_STYLE = {
    fontSize: 11,
    color: "rgba(255,255,255,0.4)",
    marginLeft: 16
};
function ContextMenu({ x, y, items, onClose }) {
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        if (item.disabled) return;
        item.onClick();
        onClose();
    }, [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = ()=>onClose();
        const handleEscape = (e)=>{
            if (e.key === "Escape") onClose();
        };
        const t = requestAnimationFrame(()=>{
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("contextmenu", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
        });
        return ()=>{
            cancelAnimationFrame(t);
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("contextmenu", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "menu",
        style: {
            ...MENU_STYLE,
            left: x,
            top: y
        },
        onClick: (e)=>e.stopPropagation(),
        children: items.map((item)=>item.separator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "separator",
                style: SEPARATOR_STYLE
            }, item.id, false, {
                fileName: "[project]/app/editor/components/ContextMenu.tsx",
                lineNumber: 104,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "menuitem",
                style: item.disabled ? ITEM_DISABLED : ITEM_STYLE,
                onMouseEnter: (e)=>{
                    if (!item.disabled) {
                        e.currentTarget.style.background = "rgba(157,255,32,0.1)";
                    }
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.background = "transparent";
                },
                onClick: ()=>handleClick(item),
                children: [
                    item.label,
                    item.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: SHORTCUT_STYLE,
                        children: item.shortcut
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/ContextMenu.tsx",
                        lineNumber: 123,
                        columnNumber: 15
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/app/editor/components/ContextMenu.tsx",
                lineNumber: 106,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/editor/components/ContextMenu.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/utils/duration.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcTotalDuration",
    ()=>calcTotalDuration
]);
function calcTotalDuration(sequences) {
    if (sequences.length === 0) return 0;
    const hasExplicitFrom = sequences.some((s)=>s.from !== undefined);
    if (hasExplicitFrom) {
        return Math.max(0, ...sequences.map((s)=>(s.from ?? 0) + s.durationInFrames));
    }
    const sorted = [
        ...sequences
    ].sort((a, b)=>a.order - b.order);
    return sorted.reduce((total, seq, i)=>{
        const isLast = i === sorted.length - 1;
        const overlap = !isLast && seq.transition ? seq.transition.durationInFrames : 0;
        return total + seq.durationInFrames - overlap;
    }, 0);
}
}),
"[project]/app/editor/components/EditorClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorClient",
    ()=>EditorClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/player/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Composition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Composition.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$ComponentPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/editor/components/ComponentPalette.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/editor/components/Timeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$PropertiesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/editor/components/PropertiesPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$ContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/editor/components/ContextMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/componentPalette.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$duration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/duration.ts [app-ssr] (ecmascript)");
"use client";
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
const API_URL = typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_URL || "http://localhost:3000";
let idCounter = 0;
function generateId() {
    return `seq-${Date.now()}-${++idCounter}`;
}
function EditorClient({ composition: initialComposition }) {
    const [composition, setComposition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialComposition);
    const [sequences, setSequences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialComposition?.sequences ?? []);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentFrame, setCurrentFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [clipboard, setClipboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalDurationInFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$duration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcTotalDuration"])(sequences), [
        sequences
    ]);
    const inputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            sequences
        }), [
        sequences
    ]);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((type)=>{
        const startFrame = totalDurationInFrames;
        const newSeq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSequenceFromType"])(type, sequences.length, generateId, startFrame);
        const next = [
            ...sequences,
            newSeq
        ].map((s, i)=>({
                ...s,
                order: i
            }));
        setSequences(next);
        setSelectedId(newSeq.id);
    }, [
        sequences,
        totalDurationInFrames
    ]);
    const handleSequencesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        const reordered = next.map((s, i)=>({
                ...s,
                order: i
            }));
        setSequences(reordered);
    }, []);
    const handleReorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((draggedId, targetOrder)=>{
        const idx = sequences.findIndex((s)=>s.id === draggedId);
        if (idx < 0 || idx === targetOrder) return;
        const next = [
            ...sequences
        ];
        const [moved] = next.splice(idx, 1);
        next.splice(targetOrder, 0, moved);
        setSequences(next.map((s, i)=>({
                ...s,
                order: i
            })));
    }, [
        sequences
    ]);
    const handleMoveInTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sequenceId, newFromFrame)=>{
        setSequences((prev)=>prev.map((s)=>s.id === sequenceId ? {
                    ...s,
                    from: Math.max(0, newFromFrame)
                } : s));
    }, []);
    const handleSequenceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updated)=>{
        setSequences((prev)=>prev.map((s)=>s.id === updated.id ? updated : s));
    }, []);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!composition?.id) return;
        try {
            const res = await fetch(`${API_URL}/api/compositions/${composition.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    sequences
                })
            });
            if (res.ok) {
                const data = await res.json();
                setComposition(data.composition);
            }
        } catch (err) {
            console.error("Error saving:", err);
        }
    }, [
        composition?.id,
        sequences
    ]);
    const handleSeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((frame)=>{
        const maxFrame = Math.max(0, totalDurationInFrames - 1);
        const clamped = Math.max(0, Math.min(frame, maxFrame));
        setCurrentFrame(clamped);
        playerRef.current?.seekTo(clamped);
    }, [
        totalDurationInFrames
    ]);
    const handleContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, target)=>{
        e.preventDefault();
        e.stopPropagation();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            target
        });
    }, []);
    const handleDuplicateSequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const idx = sequences.findIndex((s)=>s.id === id);
        if (idx < 0) return;
        const seq = sequences[idx];
        const newSeq = {
            ...JSON.parse(JSON.stringify(seq)),
            id: generateId(),
            from: totalDurationInFrames
        };
        const next = [
            ...sequences.slice(0, idx + 1),
            newSeq,
            ...sequences.slice(idx + 1)
        ].map((s, i)=>({
                ...s,
                order: i
            }));
        setSequences(next);
        setSelectedId(newSeq.id);
    }, [
        sequences,
        totalDurationInFrames
    ]);
    const handleDeleteSequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSequences((prev)=>{
            const next = prev.filter((s)=>s.id !== id).map((s, i)=>({
                    ...s,
                    order: i
                }));
            setSelectedId((sel)=>sel === id ? next[0]?.id ?? null : sel);
            return next;
        });
        setClipboard((c)=>c?.cut && c.sequence.id === id ? null : c);
    }, []);
    const handleCopySequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const seq = sequences.find((s)=>s.id === id);
        if (seq) setClipboard({
            sequence: JSON.parse(JSON.stringify(seq)),
            cut: false
        });
    }, [
        sequences
    ]);
    const handleCutSequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const seq = sequences.find((s)=>s.id === id);
        if (seq) {
            setClipboard({
                sequence: JSON.parse(JSON.stringify(seq)),
                cut: true
            });
            handleDeleteSequence(id);
        }
    }, [
        sequences,
        handleDeleteSequence
    ]);
    const handlePasteSequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((insertOrder)=>{
        if (!clipboard) return;
        const newSeq = {
            ...JSON.parse(JSON.stringify(clipboard.sequence)),
            id: generateId(),
            order: insertOrder,
            from: totalDurationInFrames
        };
        const next = sequences.map((s)=>s.order >= insertOrder ? {
                ...s,
                order: s.order + 1
            } : s).concat(newSeq).sort((a, b)=>a.order - b.order).map((s, i)=>({
                ...s,
                order: i
            }));
        setSequences(next);
        setSelectedId(newSeq.id);
        if (clipboard.cut) setClipboard(null);
    }, [
        clipboard,
        sequences,
        totalDurationInFrames
    ]);
    const handleMoveSequenceUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const idx = sequences.findIndex((s)=>s.id === id);
        if (idx <= 0) return;
        const next = [
            ...sequences
        ];
        [next[idx - 1], next[idx]] = [
            next[idx],
            next[idx - 1]
        ];
        setSequences(next.map((s, i)=>({
                ...s,
                order: i
            })));
    }, [
        sequences
    ]);
    const handleMoveSequenceDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const idx = sequences.findIndex((s)=>s.id === id);
        if (idx < 0 || idx >= sequences.length - 1) return;
        const next = [
            ...sequences
        ];
        [next[idx], next[idx + 1]] = [
            next[idx + 1],
            next[idx]
        ];
        setSequences(next.map((s, i)=>({
                ...s,
                order: i
            })));
    }, [
        sequences
    ]);
    const handleAddFromPalette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sceneType)=>{
        const startFrame = totalDurationInFrames;
        const newSeq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$componentPalette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSequenceFromType"])(sceneType, sequences.length, generateId, startFrame);
        const next = [
            ...sequences,
            newSeq
        ].map((s, i)=>({
                ...s,
                order: i
            }));
        setSequences(next);
        setSelectedId(newSeq.id);
    }, [
        sequences,
        totalDurationInFrames
    ]);
    const contextMenuItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!contextMenu) return [];
        const target = contextMenu.target;
        if (target.type === "track") {
            const seq = sequences.find((s)=>s.id === target.sequenceId);
            const idx = seq ? sequences.findIndex((s)=>s.id === seq.id) : -1;
            const canMoveUp = idx > 0;
            const canMoveDown = idx >= 0 && idx < sequences.length - 1;
            return [
                {
                    id: "duplicate",
                    label: "Duplicar",
                    shortcut: "Ctrl+D",
                    onClick: ()=>handleDuplicateSequence(target.sequenceId)
                },
                {
                    id: "sep1",
                    separator: true
                },
                {
                    id: "cut",
                    label: "Cortar",
                    shortcut: "Ctrl+X",
                    onClick: ()=>handleCutSequence(target.sequenceId)
                },
                {
                    id: "copy",
                    label: "Copiar",
                    shortcut: "Ctrl+C",
                    onClick: ()=>handleCopySequence(target.sequenceId)
                },
                {
                    id: "paste",
                    label: "Pegar",
                    shortcut: "Ctrl+V",
                    disabled: !clipboard,
                    onClick: ()=>seq && handlePasteSequence(seq.order + 1)
                },
                {
                    id: "sep2",
                    separator: true
                },
                {
                    id: "move-up",
                    label: "Mover arriba",
                    disabled: !canMoveUp,
                    onClick: ()=>handleMoveSequenceUp(target.sequenceId)
                },
                {
                    id: "move-down",
                    label: "Mover abajo",
                    disabled: !canMoveDown,
                    onClick: ()=>handleMoveSequenceDown(target.sequenceId)
                },
                {
                    id: "sep3",
                    separator: true
                },
                {
                    id: "delete",
                    label: "Eliminar",
                    shortcut: "Supr",
                    onClick: ()=>handleDeleteSequence(target.sequenceId)
                }
            ];
        }
        if (target.type === "timeline-empty") {
            return [
                {
                    id: "paste",
                    label: "Pegar aquí",
                    shortcut: "Ctrl+V",
                    disabled: !clipboard,
                    onClick: ()=>handlePasteSequence(target.insertOrder)
                },
                {
                    id: "add-text",
                    label: "Añadir texto",
                    onClick: ()=>handleAddFromPalette("text")
                },
                {
                    id: "add-image",
                    label: "Añadir imagen",
                    onClick: ()=>handleAddFromPalette("image")
                },
                {
                    id: "add-video",
                    label: "Añadir video",
                    onClick: ()=>handleAddFromPalette("video")
                }
            ];
        }
        if (target.type === "palette-item") {
            return [
                {
                    id: "add",
                    label: "Añadir al final",
                    onClick: ()=>handleAddFromPalette(target.sceneType)
                }
            ];
        }
        if (target.type === "preview") {
            return [
                {
                    id: "deselect",
                    label: "Deseleccionar",
                    onClick: ()=>setSelectedId(null)
                },
                {
                    id: "paste",
                    label: "Pegar al final",
                    shortcut: "Ctrl+V",
                    disabled: !clipboard,
                    onClick: ()=>handlePasteSequence(sequences.length)
                }
            ];
        }
        return [];
    }, [
        contextMenu,
        sequences,
        clipboard,
        handleDuplicateSequence,
        handleCutSequence,
        handleCopySequence,
        handlePasteSequence,
        handleMoveSequenceUp,
        handleMoveSequenceDown,
        handleDeleteSequence,
        handleAddFromPalette
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const maxFrame = Math.max(0, totalDurationInFrames - 1);
        if (currentFrame > maxFrame) {
            setCurrentFrame(maxFrame);
            playerRef.current?.seekTo(maxFrame);
        }
    }, [
        totalDurationInFrames,
        currentFrame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (!selectedId) return;
            const isMod = e.metaKey || e.ctrlKey;
            if (isMod && e.key === "c") {
                e.preventDefault();
                handleCopySequence(selectedId);
            } else if (isMod && e.key === "x") {
                e.preventDefault();
                handleCutSequence(selectedId);
            } else if (isMod && e.key === "v") {
                e.preventDefault();
                const seq = sequences.find((s)=>s.id === selectedId);
                if (seq) handlePasteSequence(seq.order + 1);
                else handlePasteSequence(sequences.length);
            } else if (e.key === "Delete" || e.key === "Backspace") {
                e.preventDefault();
                handleDeleteSequence(selectedId);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        selectedId,
        sequences,
        handleCopySequence,
        handleCutSequence,
        handlePasteSequence,
        handleDeleteSequence
    ]);
    const selectedSequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>sequences.find((s)=>s.id === selectedId) ?? null, [
        sequences,
        selectedId
    ]);
    const fps = composition?.fps ?? 30;
    const width = composition?.width ?? 1920;
    const height = composition?.height ?? 1080;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "#050508"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 20px",
                    borderBottom: "1px solid rgba(157,255,32,0.15)",
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "#9DFF20",
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    margin: 0
                                },
                                children: composition?.title ?? "Editor"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EditorClient.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 11,
                                    color: "rgba(255,255,255,0.4)",
                                    margin: "2px 0 0"
                                },
                                children: !composition ? "Sin composición — crea una desde el dashboard para guardar" : `${sequences.length} secuencias · ${(totalDurationInFrames / fps).toFixed(1)}s`
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EditorClient.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/EditorClient.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/dashboard",
                                style: {
                                    fontSize: 12,
                                    color: "rgba(255,255,255,0.6)",
                                    textDecoration: "none"
                                },
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EditorClient.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSave,
                                disabled: !composition?.id,
                                style: {
                                    padding: "8px 16px",
                                    borderRadius: 8,
                                    border: "1px solid rgba(157,255,32,0.4)",
                                    background: composition?.id ? "rgba(157,255,32,0.1)" : "rgba(255,255,255,0.05)",
                                    color: composition?.id ? "#9DFF20" : "rgba(255,255,255,0.4)",
                                    fontSize: 12,
                                    cursor: composition?.id ? "pointer" : "not-allowed"
                                },
                                children: "Guardar"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EditorClient.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: ("TURBOPACK compile-time value", "http://localhost:3001") ?? "http://localhost:3001",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    fontSize: 12,
                                    color: "rgba(157,255,32,0.8)",
                                    textDecoration: "none"
                                },
                                children: "Remotion Studio →"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EditorClient.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/EditorClient.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/EditorClient.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    minHeight: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$ComponentPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentPalette"], {
                        onContextMenu: (e, sceneType)=>handleContextMenu(e, {
                                type: "palette-item",
                                sceneType
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/EditorClient.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 20,
                                    minHeight: 0
                                },
                                onContextMenu: (e)=>handleContextMenu(e, {
                                        type: "preview"
                                    }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        maxWidth: 960,
                                        borderRadius: 12,
                                        overflow: "hidden",
                                        boxShadow: "0 0 0 1px rgba(157,255,32,0.15)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Player"], {
                                        ref: playerRef,
                                        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Composition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicComposition"],
                                        inputProps: inputProps,
                                        durationInFrames: Math.max(1, totalDurationInFrames),
                                        fps: fps,
                                        compositionWidth: width,
                                        compositionHeight: height,
                                        style: {
                                            width: "100%"
                                        },
                                        controls: true,
                                        loop: true,
                                        clickToPlay: true,
                                        acknowledgeRemotionLicense: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/components/EditorClient.tsx",
                                        lineNumber: 547,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/components/EditorClient.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EditorClient.tsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timeline"], {
                                sequences: sequences,
                                fps: fps,
                                totalDurationInFrames: Math.max(1, totalDurationInFrames),
                                currentFrame: currentFrame,
                                onSeek: handleSeek,
                                selectedId: selectedId,
                                onSelect: setSelectedId,
                                onDrop: handleDrop,
                                onChange: handleSequencesChange,
                                onReorder: handleReorder,
                                onMoveInTime: handleMoveInTime,
                                onContextMenu: handleContextMenu
                            }, void 0, false, {
                                fileName: "[project]/app/editor/components/EditorClient.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/components/EditorClient.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$PropertiesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesPanel"], {
                        sequence: selectedSequence,
                        onChange: handleSequenceChange
                    }, void 0, false, {
                        fileName: "[project]/app/editor/components/EditorClient.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/components/EditorClient.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$components$2f$ContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenu"], {
                x: contextMenu.x,
                y: contextMenu.y,
                items: contextMenuItems,
                onClose: ()=>setContextMenu(null)
            }, void 0, false, {
                fileName: "[project]/app/editor/components/EditorClient.tsx",
                lineNumber: 587,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/components/EditorClient.tsx",
        lineNumber: 416,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e9ed773a._.js.map