function f0() {
    return f0;
}
class C1 extends f0 {
    static m(a3, a4) {
        const v5 = `
            /\u{12345}/myvis;
            for (const v8 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
                const v9 = /a\nW/vgi;
                function f10(a11, a12, a13, a14) {
                    const v16 = Uint8ClampedArray();
                    a11.toString(v16.constructor, v9);
                    return v16;
                }
            }
        `;
        eval(v5);
    }
}
try { C1.m(C1, f0, f0, C1, C1); } catch (e) {}
gc();
