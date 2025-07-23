const o10 = {
    [undefined](a3, a4, a5) {
        createGlobalObject().Atomics.isLockFree(a4);
    },
};
o10.undefined(-3, -3);
gc();
