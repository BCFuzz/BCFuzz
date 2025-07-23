function f0(a1, a2) {
    const v3 = `
        class C4 {
            constructor(a6, a7) {
                super();
            }
        }
        /\u{12345}/myvis;
    `;
    eval(v3);
    return f0;
}
try { f0(); } catch (e) {}
gc();
