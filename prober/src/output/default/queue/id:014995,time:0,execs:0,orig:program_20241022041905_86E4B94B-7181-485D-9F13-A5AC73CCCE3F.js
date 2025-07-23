const v0 = [127,128,2,4294967297];
class C1 {
    constructor(a3) {
        v0.unshift(a3, ...v0);
    }
}
new C1(v0);
new C1(C1);
new C1();
class C8 extends C1 {
}
new C8();
gc();
