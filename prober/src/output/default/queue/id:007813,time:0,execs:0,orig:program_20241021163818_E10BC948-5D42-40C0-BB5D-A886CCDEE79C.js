const o8 = {
    get d() {
        for (let v2 = 0; v2 < 10; v2++) {
            function f3(a4, a5, a6) {
                this.__proto__ = "ILs1f";
                return v2;
            }
            f3();
        }
        return "ILs1f";
    },
};
const o9 = {
    ...o8,
};
gc();
