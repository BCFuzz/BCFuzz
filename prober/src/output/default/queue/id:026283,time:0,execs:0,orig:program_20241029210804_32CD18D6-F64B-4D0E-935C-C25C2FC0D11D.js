const v2 = new Uint16Array(166);
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
for (let v13 = 0; v13 < 10; v13++) {
    function f14() {
        for (let v15 = 0; v15 < 5; v15++) {
            for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
                    v2[i29] = i29;
                }
            }
        }
        return f14;
    }
    f14.call(Uint16Array, v2);
}
gc();
