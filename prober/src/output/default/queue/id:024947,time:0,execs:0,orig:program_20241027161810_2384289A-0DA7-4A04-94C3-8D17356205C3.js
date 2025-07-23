function f0(a1, a2) {
    const v3 = `
        class C4 {
            static #g = C4;
            #g;
        }
        /\u{12345}/myvis;
    `;
    eval(v3);
    return a1;
}
try { f0(); } catch (e) {}
gc();
