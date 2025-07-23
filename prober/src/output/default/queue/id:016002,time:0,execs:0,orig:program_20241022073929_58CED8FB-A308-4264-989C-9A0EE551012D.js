function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
const v4 = ("y").fontsize(v2);
v4.toLocaleLowerCase() == v4;
gc();
