const o4 = {
    toString(a1, a2) {
        this >= this;
        return this;
    },
};
class C5 {
}
const v6 = new C5();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a10.toString(a12, C5, F7, v6);
}
try { new F7(v6, o4); } catch (e) {}
gc();
