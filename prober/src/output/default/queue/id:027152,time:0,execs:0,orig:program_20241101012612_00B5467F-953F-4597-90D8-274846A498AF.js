const v1 = new Set();
const v4 = new WeakSet();
const v6 = [1073741825,1073741824,255,44047,-9007199254740990,16,13];
const v7 = [-1289020674,4,1172498696,268435439,128,9,256];
function f8(a9) {
    const o10 = {
        __proto__: a9,
    };
    return o10;
}
const v11 = f8(v4);
const v12 = f8(v7);
class C13 {
}
const v14 = C13.bind(v4, 1073741825, v6, "number", v1);
const o15 = {
};
const v17 = new Proxy(v14, o15);
try { v17.apply(v11, v12); } catch (e) {}
gc();
