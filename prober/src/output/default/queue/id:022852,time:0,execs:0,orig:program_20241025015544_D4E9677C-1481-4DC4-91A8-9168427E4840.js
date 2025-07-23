const o12 = {
    get d() {
        for (let v1 = 0; v1 < 100; v1++) {
            function f2(a3, a4, a5) {
                Math.random();
                Math.random();
                Math.random();
                for (let v10 = 0; v10 < 5; v10++) {
                }
                return f2;
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
