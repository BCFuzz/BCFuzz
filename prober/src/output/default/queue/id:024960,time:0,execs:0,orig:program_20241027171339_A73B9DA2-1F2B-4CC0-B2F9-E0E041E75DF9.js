const o1 = {
};
class C3 extends Float64Array {
}
const v4 = new C3();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a7.constructor = a8;
    try { a7.slice(); } catch (e) {}
}
const v12 = new F5(o1);
const t11 = v12.constructor;
new t11(v4, BigInt64Array);
gc();
