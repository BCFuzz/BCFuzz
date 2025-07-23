const v1 = new Uint8Array();
class C2 {
}
const v3 = new C2();
const o4 = {
};
function f5(a6, a7) {
    return a7;
}
const v9 = new Proxy(v3, o4);
Int8Array.constructor = f5;
const t11 = Int8Array.constructor;
const v12 = t11(v3, v9);
try { v1.toSorted(v12); } catch (e) {}
gc();
