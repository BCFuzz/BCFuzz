function f0() {
    return f0;
}
class C1 extends f0 {
    static min(a3, a4) {
        const v5 = `
            for (const v7 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
                function F8() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C10 extends F8 {
                }
                with (C10()) {
                }
            }
        `;
        eval(v5);
    }
}
try { C1.min(); } catch (e) {}
gc();
