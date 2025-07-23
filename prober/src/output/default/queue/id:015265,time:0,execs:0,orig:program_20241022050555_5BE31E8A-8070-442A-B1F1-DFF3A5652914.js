function f2(a3, a4, a5) {
    a5.valueOf = eval;
    a5 ^ a5;
    return f2;
}
const v8 = new Float64Array(3934);
v8.filter(f2);
gc();
