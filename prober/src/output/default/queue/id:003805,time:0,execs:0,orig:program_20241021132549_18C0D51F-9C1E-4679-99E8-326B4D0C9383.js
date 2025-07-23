function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
for (let i = 0; i < 10; i++) {
    const o15 = {
        set b(a8) {
            for (let v9 = 0; v9 < 5; v9++) {
                v9 / v9;
                ("p" + v9).replace("p", v6).small();
            }
        },
    };
    o15.b = o15;
}
gc();
