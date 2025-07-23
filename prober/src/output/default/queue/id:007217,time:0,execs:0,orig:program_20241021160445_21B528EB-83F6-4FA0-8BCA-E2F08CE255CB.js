class C2 {
}
class C3 extends C2 {
}
C3.toString = Date;
const v6 = [2];
Reflect.apply(("number").charAt, C3, v6);
gc();
