class C2 {
    constructor(a4, a5) {
        let v3 = this;
        v3--;
        delete v3.g;
    }
}
class C8 extends C2 {
}
new C8();
gc();
