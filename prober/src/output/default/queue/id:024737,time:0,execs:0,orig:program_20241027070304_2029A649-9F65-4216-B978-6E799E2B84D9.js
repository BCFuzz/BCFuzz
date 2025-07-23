const v0 = [];
const v3 = createGlobalObject().Float16Array;
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a6.constructor = v3;
    a6.slice();
}
try { new F4(v0); } catch (e) {}
gc();
