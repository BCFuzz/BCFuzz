for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 25; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            const v19 = this.__defineGetter__;
            try { v19(v19, F14, v19, F10); } catch (e) {}
            for (let i23 = 0, i24 = 10; i23 !== i24; i24--) {
                for (let v31 = 0; v31 < 5; v31++) {
                }
                arguments[0];
            }
        }
        new F14(v13);
    }
}
new F10(F10);
gc();
