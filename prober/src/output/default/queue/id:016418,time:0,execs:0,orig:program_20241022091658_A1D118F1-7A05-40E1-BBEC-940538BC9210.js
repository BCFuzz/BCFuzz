for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function f14(a15) {
            return F10;
        }
        const v16 = f14(F10);
        const v17 = f14(v16);
        const v18 = f14(v13);
        function F19(a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            function f24(a25, a26) {
                return v17;
            }
            a23.constructor = f24;
            const v27 = a23.constructor;
            const o28 = {
            };
            for (let v29 = 0; v29 < 100; v29++) {
                f14(v27);
            }
        }
        const v31 = new F19(v17, v18, F19);
        new F19(v16, v16, v31);
        new F19(v16, v17, f14);
    }
}
new F10();
gc();
