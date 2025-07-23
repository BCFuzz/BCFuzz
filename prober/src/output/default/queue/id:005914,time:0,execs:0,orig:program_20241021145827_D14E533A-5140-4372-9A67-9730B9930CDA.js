function f0() {
    class C1 {
    }
    with (C1) {
    }
    return C1;
}
const v4 = new Float64Array(1201);
v4.map(f0);
gc();
