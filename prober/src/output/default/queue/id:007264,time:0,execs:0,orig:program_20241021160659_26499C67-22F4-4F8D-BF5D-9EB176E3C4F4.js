class C0 {
}
const v1 = new C0();
const v2 = new C0();
function f3(a4, a5, a6) {
    a4.getTime = a4;
    return f3;
}
f3(v2);
f3(v1);
const v10 = new Uint8Array();
function f11(a12) {
    for (let v13 = 0; v13 < 50; v13++) {
        f3(v10);
    }
    return a12;
}
f11(v1);
f11();
gc();
