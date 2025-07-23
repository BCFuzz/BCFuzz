const v2 = new Float64Array(4);
v2[3] = v2;
function f3(a4, a5) {
    const v8 = new Int32Array(v2.buffer);
    v8.set(v2);
    return Float64Array;
}
Object.defineProperty(v2, "valueOf", { writable: true, enumerable: true, value: f3 });
const v11 = new Uint32Array(v2, 4);
v11.slice(v2);
gc();
