const o23 = {
    n(a1, a2, a3) {
        const v4 = [-1.2263552534524304e+308,782.3655088198889];
        for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
            const v18 = createGlobalObject().Atomics;
            try { v18.compareExchange(createGlobalObject, v4, v4, 1024); } catch (e) {}
        }
        for (let v20 = 0; v20 < 10; v20++) {
            [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
            for (let v22 = 0; v22 < 250; v22++) {
            }
        }
        return a1;
    },
};
const t15 = o23.n;
t15();
gc();
