function f0() {
    return f0;
}
const v3 = new Float64Array(1201);
const v4 = v3.map(f0);
v4[106] = v4;
gc();
