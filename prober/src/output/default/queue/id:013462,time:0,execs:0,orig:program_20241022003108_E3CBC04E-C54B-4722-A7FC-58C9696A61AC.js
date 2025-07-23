const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
const v2 = v1.keys();
class C4 {
}
const v5 = new C4();
const v6 = new C4();
const v7 = v6.constructor;
const v9 = 1.9898483973893875e+307 & 1.9898483973893875e+307;
class C10 {
}
let v11 = new C10();
const v12 = new C10();
const v13 = v12.valueOf();
function f14(a15, a16, a17, a18) {
    const o19 = {
    };
    return o19;
}
const v20 = f14();
const v21 = f14(v7, v9, Int16Array, v20);
const v22 = f14();
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
}
const v29 = new Float64Array(v11, v9, v13);
const v30 = v29.toReversed();
const v31 = new F23();
const v32 = v31.valueOf();
const v33 = v31.constructor;
const v34 = new v33(v1, v33, v29);
const v35 = `
    try { Symbol(); } catch (e) {}
    Symbol.f = Symbol;
    const v38 = Symbol.iterator;
    let v39 = v38.description;
    try { v39.bold(); } catch (e) {}
    const v41 = Symbol.for();
    Symbol.for(v41.description);
    Symbol.isConcatSpreadable = Symbol;
    v41.description;
    Symbol.for();
    const v46 = v38.description;
    const v47 = Symbol.for();
    v47.description;
    Symbol.for();
    v47.description;
    Symbol.for();
    Symbol.prototype = Symbol;
    const v52 = delete v5.h;
    !v52;
    const v54 = ++v39;
    const v55 = v54 / v54;
    v55 >> v55;
    const v57 = Symbol / v54;
    v57 / v57;
    v1[1653] = v57;
    const v59 = new Int16Array(v21);
    const v60 = v47.description;
    v60[1] = v60;
    Symbol.for(v60);
    const v62 = v47.description;
    let v63;
    try { v63 = v62.padEnd(v62); } catch (e) {}
    try { v63.replace(v30, v59); } catch (e) {}
    let v65;
    try { v65 = v63.link(Int16Array); } catch (e) {}
    const v66 = v65.constructor;
    try { v66(v20); } catch (e) {}
    const v68 = Symbol.for(v62);
    const o70 = {
        [v38]() {
        },
        "g": v32,
        __proto__: v38,
        [v7]: v41,
        "e": Symbol,
        "f": v68,
    };
    const v71 = o70?.e;
    try { v71(); } catch (e) {}
    o70.h = o70;
    o70.h = o70;
    function f73(a74) {
        return C10;
    }
    f73.g = f73;
    const v76 = new Uint32Array();
    try { v76.sort(v46); } catch (e) {}
    1000 !== 1000;
    try { Int16Array(v9, f73, v9); } catch (e) {}
    try { Int16Array(1.9898483973893875e+307, 1.9898483973893875e+307, v22); } catch (e) {}
    const v82 = new Int16Array(1000);
    try { Float32Array.apply(Symbol, v22); } catch (e) {}
    v20[4] = v13;
    const v85 = new F23(v30, v38, v21, v32);
    v85.length;
    try { v85.propertyIsEnumerable(v2); } catch (e) {}
    const v88 = v85?.constructor;
    try { v88(v39, v39, v2); } catch (e) {}
    try { v88(v88, v52, v52); } catch (e) {}
    let v91;
    try { v91 = v88(14, v34, v76); } catch (e) {}
    try { v91.toLocaleString(); } catch (e) {}
    v11 = Float32Array;
    v34[9];
    const v95 = gc();
    v95 >> v95;
    f73(...v82, Float32Array, ...v76);
`;
eval(v35);
gc();
