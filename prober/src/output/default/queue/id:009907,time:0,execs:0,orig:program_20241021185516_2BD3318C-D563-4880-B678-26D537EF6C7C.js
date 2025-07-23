const o11 = {
    get d() {
        for (let v1 = 0; v1 < 500; v1++) {
            function F2(a4, a5) {
                if (!new.target) { throw 'must be called with new'; }
                function f6(a7) {
                    return f6;
                }
                class C8 extends f6 {
                }
                C8.name;
            }
            new F2();
        }
        return this;
    },
};
const o12 = {
    ...o11,
};
gc();
