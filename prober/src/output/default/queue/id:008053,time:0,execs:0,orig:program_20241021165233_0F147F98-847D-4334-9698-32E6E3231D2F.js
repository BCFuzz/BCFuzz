function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0(F0, F0, F0, F0);
for (let i = 0; i < 10; i++) {
    const o15 = {
        set b(a8) {
            for (let v9 = 0; v9 < 5; v9++) {
                const v11 = "p" + v9;
                delete arguments.length;
                v11.replace("p", v6);
            }
        },
    };
    o15.b = o15;
}
gc();
