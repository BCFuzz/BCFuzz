function f0() {
    const o1 = {
    };
    return o1;
}
Float32Array[Symbol.iterator] = f0;
try { Float32Array.from(Float32Array); } catch (e) {}
gc();
