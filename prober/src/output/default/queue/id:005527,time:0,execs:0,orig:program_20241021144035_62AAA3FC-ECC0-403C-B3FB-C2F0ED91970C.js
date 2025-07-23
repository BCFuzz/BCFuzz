function f0() {
    return f0;
}
const v3 = new Int32Array(1);
const v5 = new Uint32Array(v3, 1, 1);
Object.defineProperty(v5, "toString", { writable: true, value: f0 });
try { v3.indexOf(Int32Array, v5); } catch (e) {}
gc();
