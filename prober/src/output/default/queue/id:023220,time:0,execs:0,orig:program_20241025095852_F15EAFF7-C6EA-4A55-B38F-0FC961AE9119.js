function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9;
        (() => {
            i9--;
            const v14 = new Float32Array();
            for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
            }
            for (let i27 = 0, i28 = 10;
                i27 < i28;
                (() => {
                    for (let v32 = 0; v32 < 25; v32++) {
                        const v34 = "p" + v32;
                        "p" in v14;
                        v14[v34] = v32;
                    }
                    i28--;
                })()) {
            }
            function f39(a40, a41) {
                return a41;
            }
            for (let i44 = 0, i45 = 10; i44 < i45; i45--) {
            }
        })()) {
    }
}
new F0(F0, F0, F0, F0);
gc();
