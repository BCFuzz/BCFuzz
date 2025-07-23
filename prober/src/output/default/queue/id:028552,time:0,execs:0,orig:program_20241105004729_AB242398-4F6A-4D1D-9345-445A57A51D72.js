function f0() {
    return f0;
}
Object.defineProperty(f0, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f0 });
const v5 = new Uint32Array(10);
const v8 = createGlobalObject().Atomics;
try { v8.or(v5, v5, f0); } catch (e) {}
gc();
