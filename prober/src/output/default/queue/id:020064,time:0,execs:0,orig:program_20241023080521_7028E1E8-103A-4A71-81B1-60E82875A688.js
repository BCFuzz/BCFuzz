const v2 = new BigUint64Array(7);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F3();
v5.g = v2;
const v6 = v5.g;
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    const v19 = createGlobalObject().Atomics;
    try { v19.or(v6); } catch (e) {}
}
gc();
