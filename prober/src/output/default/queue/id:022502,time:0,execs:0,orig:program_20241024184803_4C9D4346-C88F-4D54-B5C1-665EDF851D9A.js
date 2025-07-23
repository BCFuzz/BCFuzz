function f0() {
    f0.caller;
    return f0;
}
const v4 = new Float64Array(1201);
v4.map(f0);
gc();
