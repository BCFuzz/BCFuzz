const v2 = new Int32Array(6);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F3();
v5.g = v2;
const v6 = v5.g;
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    createGlobalObject().Atomics.or(v6);
}
gc();
