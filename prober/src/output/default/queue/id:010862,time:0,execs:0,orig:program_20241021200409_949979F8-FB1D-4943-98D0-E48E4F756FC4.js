const v0 = `
    function f1(a2, a3) {
        class C4 {
            get c() {
            }
        }
        for (let [i9, i10] = (() => {
                10 != 10;
                return [0, 10];
            })();
            i9 < i10;
            ) {
        }
        return C4;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
