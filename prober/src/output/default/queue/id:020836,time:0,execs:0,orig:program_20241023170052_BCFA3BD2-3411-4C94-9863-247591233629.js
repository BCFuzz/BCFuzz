for (let [i47, i48] = (() => {
        function F0(a2, a3, a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i8 = 0, i9 = 10;
                i8 < i9;
                (() => {
                    i9--;
                    for (let v14 = 0; v14 < 5; v14++) {
                        function F15(a17, a18, a19, a20) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f22(a23, a24) {
                                with ("pqwpR") {
                                    const v26 = Symbol();
                                    try { a5(a23, v26, F0, i9, v14); } catch (e) {}
                                    this[v26];
                                }
                                const o29 = {
                                };
                                return a2;
                            }
                            f22(a19, a20);
                            for (let i33 = 0, i34 = 10; i34--, i33 < i34;) {
                            }
                        }
                        new F15(v14, i8, i9, F0);
                    }
                })()) {
            }
        }
        new F0(F0, F0, F0, F0);
        return [0, 10];
    })();
    i47 < i48;
    i48--) {
}
gc();
