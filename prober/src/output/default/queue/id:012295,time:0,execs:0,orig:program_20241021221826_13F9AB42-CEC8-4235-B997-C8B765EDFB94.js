const v1 = new Set();
const o2 = {
    __proto__: v1,
};
class C3 extends Set {
}
const v4 = new C3();
const v5 = new C3();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    try { a9.isSubsetOf(o2); } catch (e) {}
}
new F6(v5, v4);
gc();
