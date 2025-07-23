class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
for (let v3 = 0; v3 < 100; v3++) {
    function f4(a5, a6, a7) {
        new a6();
        return f4;
    }
    f4(v2, C1);
}
gc();
