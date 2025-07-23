const o0 = {
};
const v2 = new Int8Array(o0);
class C4 extends Float64Array {
}
const v5 = new C4();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a8.constructor = a9;
    try { a8.slice(); } catch (e) {}
}
const v13 = new F6(o0);
const v14 = v13.constructor;
new v14(v2);
new v14(v5);
gc();
