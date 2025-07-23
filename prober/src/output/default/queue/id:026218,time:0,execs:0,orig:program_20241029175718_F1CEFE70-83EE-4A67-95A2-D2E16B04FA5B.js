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
                        "p" in v14;
                        v14["p"] = v32;
                    }
                    i28--;
                })()) {
            }
            for (let i40 = 0, i41 = 10; i8 < i41; i41--) {
            }
        })()) {
    }
}
new F0(F0, F0, F0, F0);
gc();
