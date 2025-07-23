const v2 = new Uint8ClampedArray(5);
const v4 = new Float64Array(v2);
function f5() {
    const v8 = new Float32Array(8);
    return v8.fill(v4, 8, 5);
}
f5[Symbol.species] = f5;
v4.constructor = f5;
v4.slice();
gc();
