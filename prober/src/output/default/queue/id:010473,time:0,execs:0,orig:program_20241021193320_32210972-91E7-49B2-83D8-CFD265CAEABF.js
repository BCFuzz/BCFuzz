const v1 = new Uint8ClampedArray();
class C3 {
}
Object.defineProperty(C3, 3, { value: v1 });
function f5(a6, a7, a8) {
    Object.defineProperty(a7, 3, { writable: true, configurable: true, enumerable: true, value: undefined });
    return v1;
}
try { f5(65536, C3); } catch (e) {}
gc();
