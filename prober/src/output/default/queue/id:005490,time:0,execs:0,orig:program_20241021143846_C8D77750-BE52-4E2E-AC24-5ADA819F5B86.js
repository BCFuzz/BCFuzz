const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
function f2() {
    v1.buffer;
    return v1;
}
v1.valueOf = f2;
v1[125] = v1;
gc();
