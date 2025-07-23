function f0() {
}
Float32Array[Symbol.iterator] = f0;
try { new Float32Array(Float32Array); } catch (e) {}
gc();
