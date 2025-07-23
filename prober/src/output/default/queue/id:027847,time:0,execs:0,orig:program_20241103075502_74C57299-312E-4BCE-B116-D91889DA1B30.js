class C0 {
    constructor(a2, a3, a4) {
        try {
            const v5 = `
                /\u{12345}/myvis;
                var arguments = Symbol;
            `;
            eval(v5);
        } catch(e10) {
        }
    }
}
for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
}
new C0();
gc();
