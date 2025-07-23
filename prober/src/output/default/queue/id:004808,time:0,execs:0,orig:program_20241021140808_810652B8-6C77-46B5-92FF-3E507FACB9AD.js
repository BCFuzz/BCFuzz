function f0(a1) {
    return a1;
}
const v2 = [f0];
v2.toString = f0;
new Set(v2);
gc();
