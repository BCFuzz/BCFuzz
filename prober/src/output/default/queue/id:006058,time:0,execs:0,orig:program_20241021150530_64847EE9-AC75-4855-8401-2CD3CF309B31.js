const v0 = /a\b!a(?=b)c/ygu;
class C1 {
    constructor(a3, a4) {
        a3.lastIndex = a3;
        v0.test(a4);
    }
}
new C1(v0);
gc();
