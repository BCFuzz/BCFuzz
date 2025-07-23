const o10 = {
    [undefined](a3, a4, a5) {
        createGlobalObject().Atomics.isLockFree(a4);
    },
};
try { o10.undefined(1024n, 1024n); } catch (e) {}
gc();
