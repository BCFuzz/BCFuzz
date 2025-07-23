function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
F1.minimum = -5n;
const v8 = createGlobalObject().WebAssembly.Memory;
try { new v8(F1); } catch (e) {}
for (let i12 = -3, i13 = 10; i13--, i12 < i13;) {
}
gc();
