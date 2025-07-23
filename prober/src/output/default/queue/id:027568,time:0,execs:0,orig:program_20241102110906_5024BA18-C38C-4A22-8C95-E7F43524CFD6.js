const o12 = {
    get d() {
        for (let v1 = 0; v1 < 10; v1++) {
            function f2(a3, a4, a5) {
                const v7 = new String(a4);
                ("c" + a3) + v7;
                return v7;
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
