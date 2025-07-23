const o12 = {
    get d() {
        for (let v1 = 0; v1 < 100; v1++) {
            function f2(a3, a4, a5) {
                const v7 = 46461n ^ 46461n;
                let v8 = -11n;
                const v9 = v8--;
                v9 & v7;
                return v9;
            }
            f2();
        }
        return this;
    },
};
const o13 = {
    ...o12,
};
gc();
