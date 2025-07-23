const v1 = new Int16Array();
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
const v13 = v12.valueOf(v7, v12, v7, v12, v7);
function f14(a15, a16, a17, a18) {
    const o19 = {
    };
    return o19;
}
const v20 = f14(v7, v13, v11, v13);
const v21 = f14();
const v22 = f14();
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
}
const v29 = new Float64Array(v7, v13);
const v30 = v29.toReversed();
const v31 = new F23();
const v32 = v31.valueOf(1.9898483973893875e+307, v12);
const t28 = v31.constructor;
const v34 = new t28();
const v35 = `
    try { Symbol(); } catch (e) {}
    Symbol.f = Symbol;
    const v38 = Symbol.iterator;
    let v39 = v38.description;
    const v40 = Symbol.for();
    Symbol.isConcatSpreadable = Symbol;
    v40.description;
    Symbol.for();
    const v43 = v38.description;
    const v44 = Symbol.for();
    Symbol.for(v44.description);
    Symbol.prototype = Symbol;
    const v47 = delete v5.h;
    !v47;
    const v49 = ++v39;
    v49 / v49;
    v1[1653] = Symbol / v49;
    new Int16Array(v21);
    Symbol.for(v44.description);
    const v55 = v44.description;
    let v56;
    try { v56 = v55.padEnd(v55); } catch (e) {}
    try { v56.link(Int16Array); } catch (e) {}
    const v58 = Symbol.for(v55);
    const o60 = {
        [v38]() {
        },
        "g": v32,
        __proto__: v38,
        [v7]: v40,
        "e": Symbol,
        "f": v58,
    };
    o60.h = o60;
    o60.h = o60;
    function f61(a62) {
    }
    f61.g = f61;
    const v64 = new Uint32Array();
    try { v64.sort(v43); } catch (e) {}
    1000 !== 1000;
    try { Int16Array(v9, f61, v9); } catch (e) {}
    try { Int16Array(1.9898483973893875e+307, 1.9898483973893875e+307, v22); } catch (e) {}
    const v70 = new Int16Array(1000);
    try { Float32Array.apply(Symbol, v22); } catch (e) {}
    v20[4] = v13;
    const v73 = new F23(v30, v38, v21, v32);
    try { v73.propertyIsEnumerable(v2); } catch (e) {}
    const v75 = v73?.constructor;
    try { v75(v75, v47, v47); } catch (e) {}
    let v77;
    try { v77 = v75(14, v34, v64); } catch (e) {}
    try { v77.toLocaleString(); } catch (e) {}
    v11 = Float32Array;
    v34[9];
    const v81 = gc();
    v81 >> v81;
    f61(...v70, Float32Array, ...v64);
`;
eval(v35);
gc();
