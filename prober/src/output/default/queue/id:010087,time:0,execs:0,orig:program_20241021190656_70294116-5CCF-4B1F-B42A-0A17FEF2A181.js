function f1() {
    return Array;
}
const v2 = f1();
class C3 extends f1 {
    h = v2;
}
new C3();
gc();
