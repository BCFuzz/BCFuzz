function f0() {
    return f0;
}
const v2 = new Float64Array();
class C3 {
    constructor(a5, a6, a7) {
        Object.defineProperty(v2, -1, { enumerable: true, get: f0 });
    }
}
try { new C3(f0, Float64Array, Float64Array); } catch (e) {}
gc();
