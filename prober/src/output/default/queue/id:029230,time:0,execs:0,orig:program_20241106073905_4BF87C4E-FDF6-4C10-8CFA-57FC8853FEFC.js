const o11 = {
    get d() {
        for (let v1 = 0; v1 < 10; v1++) {
            function f2(a3, a4, a5) {
                const v7 = new String();
                let v8 = "c";
                return (v8 &&= v7) + v8;
            }
            f2();
        }
        return this;
    },
};
const o12 = {
    ...o11,
};
gc();
