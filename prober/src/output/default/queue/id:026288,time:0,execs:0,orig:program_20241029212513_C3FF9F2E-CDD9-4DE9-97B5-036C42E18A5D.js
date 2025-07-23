const v2 = new Int32Array(6);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F3();
v5.g = v2;
const v6 = v5.g;
v6.buffer;
for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
    createGlobalObject().Atomics.or(v6);
}
gc();
