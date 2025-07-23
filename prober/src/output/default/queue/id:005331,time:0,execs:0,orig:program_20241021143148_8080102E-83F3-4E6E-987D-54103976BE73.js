function f0(a1, a2) {
    return a2;
}
const v4 = Float64Array.of(f0, Float64Array);
v4.constructor = f0;
v4.slice(v4, Float64Array, v4);
gc();
