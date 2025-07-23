function f0() {
}
const v2 = String.prototype;
Object.defineProperty(v2, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f0 });
try { new BigUint64Array(v2); } catch (e) {}
gc();
