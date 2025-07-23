class C0 {
}
const v1 = new C0();
function f2() {
    return C0;
}
function f3(a4) {
    return (a4 &&= v1) == v1;
}
f2.toString = f3;
const v8 = new Float64Array(257);
for (const v9 of v8) {
    f2.toString();
}
gc();
