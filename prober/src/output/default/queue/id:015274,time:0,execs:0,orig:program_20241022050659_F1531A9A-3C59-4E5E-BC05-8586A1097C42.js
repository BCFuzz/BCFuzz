for (let v0 = 0; v0 < 10; v0++) {
    const o10 = {
        [undefined](a3, a4, a5) {
            createGlobalObject().Atomics.isLockFree(a4);
        },
    };
    o10.undefined(o10, o10, undefined);
}
gc();
