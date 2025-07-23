class C1 {
}
const v2 = new C1();
const o3 = {
};
function f4(a5, a6) {
    return a6;
}
const v8 = new Proxy(Int32Array, o3);
Int8Array.constructor = f4;
const t10 = Int8Array.constructor;
const v11 = t10(v2, v8);
const v12 = new v11();
v12.toSorted(v11);
gc();
