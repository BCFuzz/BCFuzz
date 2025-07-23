function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6 + a6;
}
new F2("c", "c", -65535);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i17 = 0, i18 = 10;
        (() => {
            const v19 = i17 < i18;
            class C20 extends F2 {
            }
            new C20();
            return v19;
        })();
        i18--) {
    }
}
new F10();
gc();
