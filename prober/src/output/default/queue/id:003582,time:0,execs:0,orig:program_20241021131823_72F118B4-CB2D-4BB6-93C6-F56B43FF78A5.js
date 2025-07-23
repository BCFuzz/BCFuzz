class C1 extends WeakMap {
}
const v2 = C1.bind(C1, C1, C1);
class C3 {
}
class C4 extends C3 {
    #b = v2;
}
gc();
