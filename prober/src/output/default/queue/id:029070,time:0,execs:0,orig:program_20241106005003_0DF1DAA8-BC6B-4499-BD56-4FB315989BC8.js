for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
for (let v30 = 0; v30 < 100; v30++) {
    function f31() {
        const o32 = {
        };
        function f33() {
            try { BigInt64Array.toString(v30, BigInt64Array); } catch (e) {}
        }
        function f36(a37) {
            return f31;
        }
        Object.defineProperty(o32, "next", { enumerable: true, get: f33, set: f36 });
        return o32;
    }
    Float32Array[Symbol.iterator] = f31;
    try { Float32Array.from(Float32Array); } catch (e) {}
}
gc();
