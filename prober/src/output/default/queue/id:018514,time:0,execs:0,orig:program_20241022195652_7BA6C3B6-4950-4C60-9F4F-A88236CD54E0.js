function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a2(); } catch (e) {}
    class C6 {
    }
    try { C6.call(); } catch (e) {}
    C6.string = a2;
    "string" in C6;
    const v11 = new Float32Array(3008);
    for (const v12 in v11) {
    }
}
const v13 = new F0(F0);
const t13 = v13.constructor;
new t13();
gc();
