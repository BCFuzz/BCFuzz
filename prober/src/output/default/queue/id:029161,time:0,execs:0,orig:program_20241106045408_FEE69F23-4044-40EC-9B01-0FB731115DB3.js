const v2 = new Float64Array(4);
function f3(a4, a5) {
    const v7 = v2.buffer;
    const v8 = new Uint8ClampedArray(v7);
    v8.set(v2);
    return v7;
}
Object.defineProperty(v2, "valueOf", { writable: true, enumerable: true, value: f3 });
const v11 = new Uint32Array(v2, 4, 4);
v11.slice(v2);
gc();
