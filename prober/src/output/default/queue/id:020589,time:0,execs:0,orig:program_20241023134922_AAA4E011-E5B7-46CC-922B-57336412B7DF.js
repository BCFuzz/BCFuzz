function f0(a1) {
    return a1;
}
class C2 extends f0 {
}
for (let v3 = 0; v3 < 250; v3++) {
    --C2;
    Math.cosh(C2);
    Math.abs(C2);
    v3++;
    v3--;
}
gc();
