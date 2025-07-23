function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
F2.initial = 3366;
F2.minimum = -5n;
const v9 = createGlobalObject().WebAssembly.Memory;
try { new v9(F2); } catch (e) {}
for (let i13 = -3, i14 = 10; i14--, i13 < i14;) {
}
gc();
