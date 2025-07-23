for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    createGlobalObject().Atomics.isLockFree(i3);
}
gc();
