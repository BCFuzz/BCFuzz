const v1 = makeMasquerader();
class C2 {
}
const v3 = new C2();
function f4() {
    return v3;
}
function f5(a6) {
    (a6 &&= v3) == v3;
    return v1;
}
f4.toString = f5;
const v10 = new Float64Array(257);
for (const v11 of v10) {
    f4.toString();
}
gc();
