function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
createGlobalObject().WebAssembly.CompileError(F0);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
