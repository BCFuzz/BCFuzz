for (let [i16, i17] = (() => {
        function F2() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const o8 = {
            valueOf(a6) {
                return undefined < this;
            },
        };
        class C9 extends F2 {
            constructor(a11, a12, a13) {
                super();
                try { o8.valueOf(10, C9, o8, a12); } catch (e) {}
            }
        }
        new C9();
        return [0, 10];
    })();
    i16 != i17;
    i17--) {
}
gc();
