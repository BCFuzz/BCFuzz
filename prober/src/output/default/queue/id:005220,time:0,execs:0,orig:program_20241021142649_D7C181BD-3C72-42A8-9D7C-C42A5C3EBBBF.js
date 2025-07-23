const o2 = {
    "maxByteLength": 2236,
};
const v4 = new SharedArrayBuffer(2236, o2);
const v6 = new Uint16Array(v4);
v6[1026] = v6;
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
}
class C12 extends F7 {
}
const v13 = new C12();
const t14 = v13.constructor;
new t14();
gc();
