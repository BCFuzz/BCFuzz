const v0 = /(?:a?)?/ms;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        for (let i17 = 0, i18 = 10;
            (() => {
                function f19() {
                    return v0.test(a3);
                }
                ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f19);
                return i17 < i18;
            })();
            i18--) {
        }
    }
}
new F1(F1);
gc();
