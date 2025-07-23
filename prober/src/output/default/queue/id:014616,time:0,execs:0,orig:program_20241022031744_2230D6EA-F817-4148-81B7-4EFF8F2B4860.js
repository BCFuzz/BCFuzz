function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
for (let i = 0; i < 10; i++) {
    const o14 = {
        set b(a8) {
            for (let v9 = 0; v9 < 5; v9++) {
                for (let v10 = 0; v10 < 100; v10++) {
                }
                (this + v9).replace("p", v6);
            }
        },
    };
    o14.b = o14;
}
gc();
