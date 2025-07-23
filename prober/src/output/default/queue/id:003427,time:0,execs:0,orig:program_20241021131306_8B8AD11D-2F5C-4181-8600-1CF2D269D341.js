function f1(a2, a3, a4, a5) {
    const o6 = {
    };
    const t3 = o6.constructor;
    const v8 = t3(2.2250738585072014e-308);
    v8.toPrecision(2.2250738585072014e-308);
    return v8;
}
try { f1(); } catch (e) {}
gc();
