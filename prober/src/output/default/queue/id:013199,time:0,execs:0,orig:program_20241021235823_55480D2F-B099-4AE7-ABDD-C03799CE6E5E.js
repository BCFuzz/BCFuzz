const v1 = new Int32Array();
const v4 = new Float32Array();
const v7 = new Uint8ClampedArray(255);
for (const v8 in v7) {
    const o9 = {
    };
    function f10() {
        return v7;
    }
    function f11(a12) {
        const v15 = [f10,13,-16];
        Reflect.apply(v4.fill, v1, v15);
        return o9;
    }
    Object.defineProperty(o9, "a", { configurable: true, enumerable: true, get: f10, set: f11 });
    o9.a = v8;
}
gc();
