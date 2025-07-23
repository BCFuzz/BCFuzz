const v1 = new WeakSet();
const v3 = [-1,-1073741824,1942980296];
const v4 = [-1289020674,4,1172498696,268435439,128,9,256];
function f5(a6) {
    const o7 = {
        __proto__: a6,
    };
    return o7;
}
const v8 = f5(v4);
const v9 = f5(v4);
class C10 {
}
const v11 = C10.bind(v1, 1073741825, v3);
const o12 = {
};
const v14 = new Proxy(v11, o12);
try { v14.apply(v8, v9); } catch (e) {}
gc();
