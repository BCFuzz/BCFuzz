function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
    }
    function F15(a17) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v18 = 0; v18 < 50; v18++) {
            function F19(a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                for (let [i39, i40] = (() => {
                        function f24(a25, a26, a27, a28) {
                            const o31 = {
                                set d(a30) {
                                },
                            };
                            return this;
                        }
                        for (let v32 = 0; v32 < 25; v32++) {
                            f24(v32, F0, this, v32);
                        }
                        for (let v36 = 0; v36 < 5; v36++) {
                            ("function").concat();
                        }
                        return [0, 10];
                    })();
                    i39 < i40;
                    i40--) {
                }
            }
            new F19(v18, this, a3);
        }
    }
    new F15(a2);
}
new F0(F0, F0, F0);
gc();
