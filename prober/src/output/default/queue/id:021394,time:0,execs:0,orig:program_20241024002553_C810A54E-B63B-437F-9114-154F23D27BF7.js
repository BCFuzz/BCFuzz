class C1 {
}
class C2 extends C1 {
}
for (let v3 = 0; v3 < 100; v3++) {
    class C4 extends C2 {
    }
    new C4();
}
gc();
