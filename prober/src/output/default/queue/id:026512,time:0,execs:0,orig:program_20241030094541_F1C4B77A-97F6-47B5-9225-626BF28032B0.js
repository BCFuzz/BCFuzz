function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(BigUint64Array, 1, { get: F0 });
try { new Float64Array(BigUint64Array); } catch (e) {}
gc();
