function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
v5.a = 10;
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            const v11 = `
                function f12() {
                    const o16 = {
                        set g(a14) {
                            /\u{12345}/myvis;
                        },
                    };
                    return F1;
                }
            `;
            const v17 = v11.split(a9);
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();
