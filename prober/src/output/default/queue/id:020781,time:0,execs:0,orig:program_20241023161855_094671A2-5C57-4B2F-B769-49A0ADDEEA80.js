class C0 {
}
const v1 = new C0();
const o2 = {
};
function f3(a4, a5) {
    return a5;
}
const v7 = new Proxy(v1, o2);
Int8Array.constructor = f3;
const t10 = Int8Array.constructor;
const v10 = t10(v1, v7);
const v12 = new Int32Array();
try { v12.toSorted(v10); } catch (e) {}
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
