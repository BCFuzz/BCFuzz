const o16 = {
    toString(a2, a3) {
        const o5 = {
        };
        const t4 = o5.constructor;
        const v7 = t4(2.2250738585072014e-308);
        function f8(a9, a10) {
            return 100;
        }
        v7.valueOf = f8;
        const v11 = v7.toExponential(v7);
        return createGlobalObject().Atomics.isLockFree(v11);
    },
};
o16.toString(100, 100, o16);
gc();
