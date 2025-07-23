class C1 {
}
let v2 = new C1();
const v3 = new C1();
const v4 = v3.valueOf();
function f5(a6, a7, a8, a9) {
    const o10 = {
    };
    return o10;
}
const v11 = f5(v2, C1, v3, v2);
const v12 = f5();
const v13 = f5();
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
const v20 = new Float64Array(v11, v4, v4);
const v21 = v20.toReversed();
const v22 = new F14();
const v23 = v22.valueOf(v4, v3, Float64Array, v11, v13);
const v24 = v22.constructor;
const v25 = new v24(v4, v24, Float64Array);
const v26 = `
    Symbol.f = Symbol;
    const v28 = Symbol.iterator;
    v28.description;
    Symbol.for();
    v28.description;
    Symbol.for(Symbol.for().description);
    const o36 = {
        [v28]() {
        },
    };
    function f37(a38) {
        return a38;
    }
    const v40 = new Uint32Array();
    1000 !== 1000;
    try { new Int16Array(1.9898483973893875e+307, 1.9898483973893875e+307, v13); } catch (e) {}
    const v45 = new Int16Array(1000);
    try { Float32Array.apply(Symbol, v13); } catch (e) {}
    v11[4] = v4;
    new F14(v21, v28, v12, v23);
    v2 = Float32Array;
    v25[9];
    gc();
    f37(...v45, Float32Array, ...v40);
`;
eval(v26);
gc();
