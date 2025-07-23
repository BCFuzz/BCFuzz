for (let v0 = 0; v0 < 100; v0++) {
    function f1() {
        const o2 = {
        };
        return o2;
    }
    Float32Array[Symbol.iterator] = f1;
    try { Float32Array.from(Float32Array); } catch (e) {}
}
gc();
