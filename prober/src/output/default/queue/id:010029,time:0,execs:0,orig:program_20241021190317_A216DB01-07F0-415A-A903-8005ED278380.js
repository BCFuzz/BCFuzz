for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 10; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i23, i24] = (() => {
                    new Float32Array(a18);
                    return [0, 10];
                })();
                i23 <= i24;
                i24--) {
            }
        }
        new F14(v13, this, a12);
    }
}
new F10();
gc();
