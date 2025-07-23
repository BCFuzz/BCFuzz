const v1 = new Int32Array();
const o3 = {
};
class C5 extends Float64Array {
}
const v6 = new C5();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a9.constructor = a10;
    try { a9.slice(this); } catch (e) {}
}
const v14 = new F7(o3);
const t12 = v14.constructor;
const v16 = new t12(v6);
const t14 = v16.constructor;
new t14(v1, 127);
gc();
