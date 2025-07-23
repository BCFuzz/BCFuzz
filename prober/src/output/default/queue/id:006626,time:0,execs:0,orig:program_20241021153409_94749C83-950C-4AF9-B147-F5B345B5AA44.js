const o13 = {
    get d() {
        for (let v1 = 0; v1 < 100; v1++) {
            function f2(a3, a4, a5) {
                const v7 = 46461n ^ 46461n;
                let v8 = -11n;
                let v10 = v8-- & v7;
                return v10--;
            }
            f2();
        }
        return this;
    },
};
const o14 = {
    ...o13,
};
gc();
