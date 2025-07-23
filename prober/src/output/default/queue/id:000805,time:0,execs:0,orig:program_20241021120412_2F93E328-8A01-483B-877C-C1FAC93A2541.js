class C1 {
}
const v2 = new C1();
const v3 = [C1,v2,true];
class C5 extends WeakMap {
    [v3];
}
gc();
