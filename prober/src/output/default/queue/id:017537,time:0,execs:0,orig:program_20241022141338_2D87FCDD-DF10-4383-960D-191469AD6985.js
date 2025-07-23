for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        const o15 = {
            [undefined](a8, a9, a10) {
                createGlobalObject().Atomics.isLockFree(a9);
            },
        };
        o15.undefined(-3, -3);
        return v4;
    })();
    i3--) {
}
gc();
