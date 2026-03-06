module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/_lib/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSessionUser",
    ()=>getSessionUser,
    "isAuthError",
    ()=>isAuthError,
    "requireAuth",
    ()=>requireAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
const SESSION_SECRET = new TextEncoder().encode(process.env.SESSION_SECRET);
async function getSessionUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("session")?.value;
    if (!token) return null;
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, SESSION_SECRET);
        return payload;
    } catch  {
        return null;
    }
}
async function requireAuth() {
    const user = await getSessionUser();
    if (!user) {
        return {
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No autorizado"
            }, {
                status: 401
            })
        };
    }
    return user;
}
function isAuthError(result) {
    return "error" in result;
}
}),
"[project]/src/firebase-admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "adminApp",
    ()=>adminApp,
    "adminAuth",
    ()=>adminAuth,
    "adminStorage",
    ()=>adminStorage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import, [project]/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import, [project]/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import, [project]/node_modules/firebase-admin)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function getPrivateKey() {
    const raw = process.env.FIREBASE_PRIVATE_KEY;
    if (!raw) throw new Error("FIREBASE_PRIVATE_KEY no está definida en .env");
    // El JSON del service account usa \n literales; los convertimos a saltos reales.
    // Si ya contiene saltos reales (multilinea), trim() lo limpia sin romperlo.
    const key = raw.replace(/\\n/g, "\n").trim();
    if (!key.includes("BEGIN PRIVATE KEY")) {
        throw new Error("FIREBASE_PRIVATE_KEY tiene formato incorrecto. Pega el valor completo del campo 'private_key' del JSON del service account, incluyendo '-----BEGIN PRIVATE KEY-----' y '-----END PRIVATE KEY-----'.");
    }
    return key;
}
const adminApp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["initializeApp"])({
    credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["cert"])({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: getPrivateKey()
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
}) : (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getApps"])()[0];
const adminAuth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getAuth"])(adminApp);
const adminStorage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getStorage"])(adminApp);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "COLLECTIONS",
    ()=>COLLECTIONS,
    "assetRef",
    ()=>assetRef,
    "assetToDTO",
    ()=>assetToDTO,
    "assetsRef",
    ()=>assetsRef,
    "calcTotalDuration",
    ()=>calcTotalDuration,
    "compositionRef",
    ()=>compositionRef,
    "compositionToDTO",
    ()=>compositionToDTO,
    "compositionsRef",
    ()=>compositionsRef,
    "createAsset",
    ()=>createAsset,
    "createComposition",
    ()=>createComposition,
    "deleteAsset",
    ()=>deleteAsset,
    "deleteComposition",
    ()=>deleteComposition,
    "getComposition",
    ()=>getComposition,
    "listAssets",
    ()=>listAssets,
    "listCompositions",
    ()=>listCompositions,
    "updateComposition",
    ()=>updateComposition,
    "upsertUserProfile",
    ()=>upsertUserProfile,
    "userRef",
    ()=>userRef
]);
/**
 * server-only — importar solo desde rutas de API o Server Components.
 *
 * Colecciones Firestore:
 *   users/{uid}                              → perfil del usuario
 *   users/{uid}/compositions/{compositionId} → composiciones de video
 *   users/{uid}/assets/{assetId}             → assets multimedia
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import, [project]/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase-admin.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getFirestore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminApp"]);
const COLLECTIONS = {
    /** `users/{uid}` */ user: (uid)=>`users/${uid}`,
    /** `users/{uid}/compositions` */ compositions: (uid)=>`users/${uid}/compositions`,
    /** `users/{uid}/compositions/{compositionId}` */ composition: (uid, compositionId)=>`users/${uid}/compositions/${compositionId}`,
    /** `users/{uid}/assets` */ assets: (uid)=>`users/${uid}/assets`,
    /** `users/{uid}/assets/{assetId}` */ asset: (uid, assetId)=>`users/${uid}/assets/${assetId}`
};
function calcTotalDuration(sequences) {
    if (sequences.length === 0) return 0;
    const sorted = [
        ...sequences
    ].sort((a, b)=>a.order - b.order);
    return sorted.reduce((total, seq, i)=>{
        const isLast = i === sorted.length - 1;
        const overlap = !isLast && seq.transition ? seq.transition.durationInFrames : 0;
        return total + seq.durationInFrames - overlap;
    }, 0);
}
function compositionToDTO(id, doc) {
    return {
        id,
        ownerId: doc.ownerId,
        title: doc.title,
        description: doc.description,
        status: doc.status,
        thumbnailUrl: doc.thumbnailUrl,
        fps: doc.fps,
        width: doc.width,
        height: doc.height,
        sequences: doc.sequences,
        totalDurationInFrames: doc.totalDurationInFrames,
        createdAt: doc.createdAt.toDate().toISOString(),
        updatedAt: doc.updatedAt.toDate().toISOString()
    };
}
function assetToDTO(id, doc) {
    return {
        id,
        ownerId: doc.ownerId,
        name: doc.name,
        type: doc.type,
        mimeType: doc.mimeType,
        sizeBytes: doc.sizeBytes,
        storagePath: doc.storagePath,
        downloadUrl: doc.downloadUrl,
        width: doc.width,
        height: doc.height,
        durationSeconds: doc.durationSeconds,
        createdAt: doc.createdAt.toDate().toISOString(),
        updatedAt: doc.updatedAt.toDate().toISOString()
    };
}
const compositionsRef = (uid)=>db.collection(COLLECTIONS.compositions(uid));
const compositionRef = (uid, compositionId)=>db.doc(COLLECTIONS.composition(uid, compositionId));
const assetsRef = (uid)=>db.collection(COLLECTIONS.assets(uid));
const assetRef = (uid, assetId)=>db.doc(COLLECTIONS.asset(uid, assetId));
const userRef = (uid)=>db.doc(COLLECTIONS.user(uid));
async function listCompositions(uid) {
    const snap = await compositionsRef(uid).orderBy("updatedAt", "desc").get();
    return snap.docs.map((doc)=>compositionToDTO(doc.id, doc.data()));
}
async function getComposition(uid, compositionId) {
    const snap = await compositionRef(uid, compositionId).get();
    if (!snap.exists) return null;
    return compositionToDTO(snap.id, snap.data());
}
async function createComposition(uid, input) {
    const now = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["FieldValue"].serverTimestamp();
    const docData = {
        ...input,
        ownerId: uid,
        createdAt: now,
        updatedAt: now
    };
    const ref = await compositionsRef(uid).add(docData);
    const snap = await ref.get();
    return compositionToDTO(snap.id, snap.data());
}
async function updateComposition(uid, compositionId, patch) {
    const ref = compositionRef(uid, compositionId);
    if (!(await ref.get()).exists) return null;
    await ref.update({
        ...patch,
        updatedAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["FieldValue"].serverTimestamp()
    });
    const updated = await ref.get();
    return compositionToDTO(updated.id, updated.data());
}
async function deleteComposition(uid, compositionId) {
    const ref = compositionRef(uid, compositionId);
    if (!(await ref.get()).exists) return false;
    await ref.delete();
    return true;
}
async function listAssets(uid) {
    const snap = await assetsRef(uid).orderBy("createdAt", "desc").get();
    return snap.docs.map((doc)=>assetToDTO(doc.id, doc.data()));
}
async function createAsset(uid, input) {
    const now = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["FieldValue"].serverTimestamp();
    const docData = {
        ...input,
        ownerId: uid,
        createdAt: now,
        updatedAt: now
    };
    const ref = await assetsRef(uid).add(docData);
    const snap = await ref.get();
    return assetToDTO(snap.id, snap.data());
}
async function deleteAsset(uid, assetId) {
    const ref = assetRef(uid, assetId);
    if (!(await ref.get()).exists) return false;
    await ref.delete();
    return true;
}
async function upsertUserProfile(uid, data) {
    const ref = userRef(uid);
    const snap = await ref.get();
    if (!snap.exists) {
        await ref.set({
            ...data,
            plan: "free",
            compositionsCount: 0,
            storageUsedBytes: 0,
            createdAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["FieldValue"].serverTimestamp(),
            updatedAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["FieldValue"].serverTimestamp()
        });
    } else {
        await ref.update({
            ...data,
            updatedAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["FieldValue"].serverTimestamp()
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/constants/defaultSequences.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/api/compositions/init/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$_lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/_lib/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$defaultSequences$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/defaultSequences.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function POST() {
    const auth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$_lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAuth"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$_lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAuthError"])(auth)) return auth.error;
    try {
        // Asegurar que el perfil del usuario existe en Firestore
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertUserProfile"])(auth.uid, {
            email: auth.email ?? "",
            displayName: auth.name ?? undefined,
            photoUrl: auth.picture ?? undefined
        });
        const composition = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createComposition"])(auth.uid, {
            title: "Lait Technology — Presentation",
            description: "Composición inicial del proyecto",
            status: "draft",
            fps: 30,
            width: 1920,
            height: 1080,
            sequences: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$defaultSequences$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_SEQUENCES"],
            totalDurationInFrames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calcTotalDuration"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$defaultSequences$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_SEQUENCES"])
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            composition
        }, {
            status: 201
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error("[POST /api/compositions/init]", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Error al inicializar la colección en Firebase",
            details: message
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5536d22d._.js.map