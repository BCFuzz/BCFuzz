function f0() {
    const o8 = {
        "g": "symbol",
        "f": 117534.52794211381,
        "h": "symbol",
        ..."symbol",
        set c(a5) {
            gc();
        },
        "d": "40881",
        [117534.52794211381]: 117534.52794211381,
        "e": "40881",
        __proto__: "40881",
    };
    o8.d = o8;
    return o8;
}
const v9 = f0();
f0();
const v11 = f0();
v11.h = v11;
function f12() {
    return v9;
}
new Int16Array(1);
const v18 = new Uint8ClampedArray(111);
4096 >> 4096;
Int32Array.prototype = Int32Array;
new Int32Array(4096);
const v23 = [];
v23[1];
const v25 = [10790,15,-1411783585,-145111426,-5,256];
const v26 = [-572867068,-935637352];
function f27(a28) {
    a28[7] = v18;
    Object.defineProperty(a28, 5, { configurable: true, enumerable: true, value: v23 });
    return v26;
}
const v29 = f27(v26);
try { v29.entries(); } catch (e) {}
const v31 = f27(v25);
function f32(a33, a34, a35, a36) {
    try { a33.shift(); } catch (e) {}
    a34[6] = a34;
    try { a35.filter(a34); } catch (e) {}
    a35[3] = a35;
    return v25;
}
f32(v31, v31, v26);
const v40 = f32(v25, f27, v26);
try { v40.filter(f0); } catch (e) {}
gc();
