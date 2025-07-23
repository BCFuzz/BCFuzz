const v2 = new Uint8Array();
class C3 {
}
const v4 = new C3();
const o5 = {
};
function f6(a7, a8) {
    return a8;
}
const v10 = new Proxy(Int32Array, o5);
Int8Array.constructor = f6;
const t11 = Int8Array.constructor;
v2.toSorted(t11(v4, v10));
gc();
