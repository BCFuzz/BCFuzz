for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 100; v10++) {
    function f11() {
        const o12 = {
        };
        function f13() {
            return o12;
        }
        function f14(a15) {
            return f14;
        }
        Object.defineProperty(o12, "next", { enumerable: true, get: f13, set: f14 });
        return o12;
    }
    Float32Array[Symbol.iterator] = f11;
    try { Float32Array.from(Float32Array); } catch (e) {}
}
gc();
