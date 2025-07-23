class C0 {
}
const v1 = new C0();
function f2() {
    function f3() {
        const v6 = new ArrayBuffer(19);
        new Float32Array(v6);
        return C0;
    }
    return f3;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: f2 });
const v9 = v1.constructor;
try { v9(); } catch (e) {}
gc();
