const v2 = URIError().__proto__;
const o3 = {
};
class C5 extends Int8Array {
}
const v6 = new C5();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a9.constructor = a10;
    try { a9.slice(C5); } catch (e) {}
}
const v14 = new F7(o3);
const t12 = v14.constructor;
new t12(v6, v2);
gc();
