function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
    }
    function F15(a17) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v18 = 0; v18 < 50; v18++) {
            function F19(a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                for (let [i29, i30] = (() => {
                        for (let v26 = 0; v26 < 5; v26++) {
                            ("function").concat();
                        }
                        return [0, 10];
                    })();
                    i29 < i30;
                    i30--) {
                }
            }
            new F19(a3, v18, this);
        }
    }
    new F15(F0);
}
const v39 = new F0();
const v40 = v39.constructor;
new v40(v40, F0, F0);
gc();
