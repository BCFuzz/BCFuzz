class C1 {
}
class C2 extends C1 {
}
const v5 = [2];
Reflect.apply(("number").charAt, C2, v5);
gc();
