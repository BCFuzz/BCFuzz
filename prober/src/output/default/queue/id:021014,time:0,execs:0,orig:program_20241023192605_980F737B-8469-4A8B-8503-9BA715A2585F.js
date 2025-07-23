function f0() {
    return f0;
}
class C1 extends f0 {
    static m(a3, a4) {
        const v5 = `
            /\u{12345}/myvis;
            for (const v8 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
                function F9() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C11 extends F9 {
                }
                with (C11()) {
                }
            }
        `;
        eval(v5);
    }
}
try { C1.m(); } catch (e) {}
gc();
