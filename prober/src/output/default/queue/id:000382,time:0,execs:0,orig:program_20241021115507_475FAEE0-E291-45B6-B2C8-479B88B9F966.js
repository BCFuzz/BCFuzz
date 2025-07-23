class C1 {
}
class C2 extends C1 {
    g = -10;
}
const v3 = new C2();
delete v3.g;
gc();
