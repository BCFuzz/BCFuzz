const o13 = {
    get d() {
        for (let v1 = 0; v1 < 100; v1++) {
            function f2(a3, a4, a5) {
                Math.random();
                Math.random();
                Math.random();
                try { a5(); } catch (e) {}
                a5 &&= f2;
                for (let v11 = 0; v11 < 5; v11++) {
                }
                return f2;
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
