const o21 = {
    n(a1, a2, a3) {
        const v4 = [-1.2263552534524304e+308,782.3655088198889];
        for (let i = 0; i < 5; i++) {
            for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
                const v18 = createGlobalObject().Atomics;
                try { v18.compareExchange(createGlobalObject, v4, v4, 1024); } catch (e) {}
                for (let v20 = 0; v20 < 5; v20++) {
                }
            }
        }
        return a1;
    },
};
const t14 = o21.n;
t14();
gc();
