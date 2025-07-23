function f1(a2, a3, a4) {
    a4.valueOf = eval;
    return a4 ^ a4;
}
const v8 = new Float64Array(10);
v8.filter(f1);
gc();
