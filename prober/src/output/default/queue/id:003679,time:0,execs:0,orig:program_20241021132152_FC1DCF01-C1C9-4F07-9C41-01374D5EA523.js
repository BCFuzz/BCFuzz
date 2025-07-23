function f0() {
    return f0;
}
const v3 = new Float64Array(1201);
v3.map(f0);
gc();
