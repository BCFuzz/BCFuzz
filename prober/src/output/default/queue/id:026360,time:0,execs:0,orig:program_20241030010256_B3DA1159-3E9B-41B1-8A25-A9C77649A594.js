function f0(a1, a2) {
    const v3 = `
        class C4 {
            static #g = C4;
            #g;
        }
    `;
    eval(v3);
    return eval;
}
try { f0(f0, f0); } catch (e) {}
gc();
