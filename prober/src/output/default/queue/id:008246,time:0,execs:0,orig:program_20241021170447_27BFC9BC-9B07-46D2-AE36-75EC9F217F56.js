const o6 = {
    n(a1, a2, a3) {
        for (let v4 = 0; v4 < 10; v4++) {
            const o5 = {
            };
            o5.__proto__ = this;
        }
        return this;
    },
};
const v7 = o6.n;
v7(v7, v7, o6, o6, o6);
gc();
