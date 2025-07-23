const o15 = {
    get d() {
        for (let v1 = 0; v1 < 10; v1++) {
            function f2(a3, a4, a5) {
                const v7 = new String(a4);
                v7[Symbol.toPrimitive] = String;
                for (let v10 = 0; v10 < 5; v10++) {
                }
                ("c" + a3) + v7;
                return this;
            }
            f2();
        }
        return this;
    },
};
const o16 = {
    ...o15,
};
gc();
