class C1 {
}
function f2() {
    for (let i5 = -3, i6 = 10; i5 < i6; i6--) {
    }
    return -1.794731968364562e+307;
}
C1.toString = f2;
eval(([[-2.220446049250313e-16,C1]]).toLocaleString());
gc();
