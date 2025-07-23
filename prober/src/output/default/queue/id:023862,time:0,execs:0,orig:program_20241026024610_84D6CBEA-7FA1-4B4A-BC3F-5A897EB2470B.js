const v2 = new Int8Array(128);
for (const v3 in v2) {
    const v6 = Array(128);
    function f7(a8, a9) {
        const v10 = a8.padEnd;
        let v11;
        try { v11 = new v10(Array, Float32Array); } catch (e) {}
        Math.random();
        return v11;
    }
    Object.defineProperty(v6, Symbol.toPrimitive, { value: f7 });
    class C16 {
        [v6] = Float32Array;
    }
}
gc();
