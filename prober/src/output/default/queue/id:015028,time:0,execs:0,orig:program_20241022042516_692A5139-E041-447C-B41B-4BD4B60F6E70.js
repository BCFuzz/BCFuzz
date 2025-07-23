for (let [i42, i43] = (() => {
        function F0(a2, a3, a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i8 = 0, i9 = 10;
                i8 < i9;
                (() => {
                    i9--;
                    class C15 {
                        #d;
                    }
                    const v16 = new C15();
                    const v17 = new C15();
                    function f18(a19, a20, a21, a22) {
                        const o34 = {
                            [a21](a24, a25, a26) {
                            },
                            toString(a28, a29, a30) {
                                JSON["stringify"](v17);
                                return a3;
                            },
                        };
                        return o34;
                    }
                    f18(v16, 1000000.0, f18(a2, C15, F0, i9));
                })()) {
            }
        }
        new F0();
        return [0, 10];
    })();
    i42 < i43;
    i43--) {
}
gc();
