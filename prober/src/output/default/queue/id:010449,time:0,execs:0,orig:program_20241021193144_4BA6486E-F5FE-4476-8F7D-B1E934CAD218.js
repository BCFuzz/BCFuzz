const v1 = [-9223372036854775808];
function f2(a3) {
    return -9223372036854775808;
}
v1.valueOf = f2;
const v6 = Array(3966);
v6.toSpliced(v1, v6);
gc();
