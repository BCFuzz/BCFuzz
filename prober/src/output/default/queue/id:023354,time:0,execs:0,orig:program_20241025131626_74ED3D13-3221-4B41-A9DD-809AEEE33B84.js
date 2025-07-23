for (let v0 = 0; v0 < 10; v0++) {
    v0++;
    v0--;
    const v5 = createGlobalObject().Atomics;
    gc();
    v5.isLockFree();
}
for (let v9 = 0; v9 < 250; v9++) {
}
gc();
