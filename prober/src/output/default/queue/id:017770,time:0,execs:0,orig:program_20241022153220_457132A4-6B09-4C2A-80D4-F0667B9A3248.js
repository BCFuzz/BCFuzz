function f0(a1) {
    return a1;
}
class C2 extends f0 {
}
for (let v3 = 0; v3 < 100; v3++) {
    new C2();
}
gc();
