for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function f14(a15) {
            return F10;
        }
        function F16(a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i23 = 0, i24 = 10;
                (() => {
                    const o25 = {
                        __proto__: this,
                        "c": this,
                        "e": f14,
                    };
                    return i23 < i24;
                })();
                i24--) {
            }
        }
        new F16(F16, v13, a12);
    }
}
new F10(F10);
gc();
