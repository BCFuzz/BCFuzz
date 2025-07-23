function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
for (let i = 0; i < 10; i++) {
    const o13 = {
        set b(a8) {
            for (let v9 = 0; v9 < 5; v9++) {
                ("p" + v9).replace("p", v6);
            }
        },
    };
    o13.b = o13;
}
gc();
