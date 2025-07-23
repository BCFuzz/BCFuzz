for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    createGlobalObject().Atomics.isLockFree(i3);
}
new BigUint64Array();
for (let v16 = 0; v16 < 250; v16++) {
}
gc();
