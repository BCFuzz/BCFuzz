const v0 = [-1,-1073741824,1942980296];
const v1 = [-1289020674,4,1172498696,268435439,128,9,256];
const v2 = [16851,-268435456,268435441,65537,12,15225];
function f3(a4) {
    const o5 = {
        ...v2,
        4236463295: v0,
        __proto__: a4,
    };
    return o5;
}
const v6 = f3();
const v7 = f3(v1);
class C8 {
}
const v9 = C8.bind();
const o10 = {
};
const v12 = new Proxy(v9, o10);
try { v12.apply(v6, v7); } catch (e) {}
gc();
