function f1(a2) {
}
Object.defineProperty(Uint8ClampedArray, Symbol.iterator, { writable: true, enumerable: true, value: f1 });
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
