const v2 = new Int32Array(209);
const v3 = new Int32Array();
const v4 = [209];
function f5() {
    const o6 = {
    };
    const v7 = o6.constructor;
    v7.getOwnPropertySymbols(v3);
    return v7;
}
const v10 = [f5];
Reflect.apply(v4.toSorted, v2, v10);
gc();
