function f1() {
}
Object.defineProperty(Uint8Array, Symbol.iterator, { configurable: true, value: f1 });
try { new Uint8Array(Uint8Array); } catch (e) {}
gc();
