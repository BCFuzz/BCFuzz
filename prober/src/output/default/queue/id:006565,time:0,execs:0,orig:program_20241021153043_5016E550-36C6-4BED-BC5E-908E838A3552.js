function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = new Float32Array("string");
    class C16 {
        constructor(a18, a19, a20) {
            a20 in v13;
        }
    }
    new C16(Float32Array, 1182, 2554);
    new C16();
    new C16(1182, 2554, 2554);
}
const v25 = new F5();
const v26 = new F5();
new F5("then", v26, v25, v26);
gc();
