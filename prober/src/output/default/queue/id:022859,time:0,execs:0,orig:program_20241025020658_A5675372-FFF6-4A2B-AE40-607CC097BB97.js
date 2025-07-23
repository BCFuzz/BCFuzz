const v2 = new Int32Array(209);
const v3 = [209,209];
function f4() {
    const o6 = {
    };
    const v8 = o6.constructor.getOwnPropertySymbols(RegExp);
    try { v8.with(209); } catch (e) {}
    v8[0];
}
const v12 = [f4];
Reflect.apply(v3.toSorted, v2, v12);
gc();
