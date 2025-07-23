function f1() {
    return f1;
}
Object.defineProperty(Int32Array, "toString", { configurable: true, enumerable: true, get: f1 });
try { Int32Array.toString(f1, Int32Array, Int32Array); } catch (e) {}
const v5 = new Uint8Array(1024);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v5;
}
const v12 = new F6(F6, Uint8Array, F6, F6);
for (const v14 of v12.d) {
}
gc();
