function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 10; i++) {
        const o16 = {
            set b(a12) {
                ("MIN_VALUE" + a8).replace("MIN_VALUE", "");
            },
        };
        o16.b = o16;
    }
}
new F4(F4, F4, F0);
gc();
