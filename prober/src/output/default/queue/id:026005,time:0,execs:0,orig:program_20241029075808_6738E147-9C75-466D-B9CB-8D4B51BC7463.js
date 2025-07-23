const v0 = /ta[a-z]/ms;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        for (let i17 = 0, i18 = 10;
            (() => {
                i18--;
                function f20() {
                    v0.test(a3);
                    return F1;
                }
                ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f20);
                return i17 <= i18;
            })();
            ) {
        }
    }
}
new F1();
gc();
