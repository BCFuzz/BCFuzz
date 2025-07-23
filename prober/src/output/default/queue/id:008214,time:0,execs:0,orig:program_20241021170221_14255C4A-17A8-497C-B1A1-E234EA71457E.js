function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Float32Array(a3, a3, a6);
    v8.BYTES_PER_ELEMENT;
    class C10 {
        constructor(a12, a13, a14) {
            a14 in v8;
        }
    }
    const v16 = new C10();
    const v17 = v16.constructor;
    try { new v17(this, "string", "string", v17); } catch (e) {}
    new v17("string", F1, "string");
}
new F1(F1, "string", F1, F1);
const v21 = new F1();
const t16 = v21.constructor;
new t16();
gc();
