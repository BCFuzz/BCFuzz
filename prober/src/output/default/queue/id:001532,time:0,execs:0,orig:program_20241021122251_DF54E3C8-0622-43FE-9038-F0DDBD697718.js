function f2() {
    return "P";
}
class C3 extends f2 {
}
const v4 = new C3();
const v7 = [383];
Reflect.apply(("cause").padStart, v4, v7);
with ("P") {
}
gc();
