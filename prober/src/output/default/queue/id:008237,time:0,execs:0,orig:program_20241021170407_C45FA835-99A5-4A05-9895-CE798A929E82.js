class C0 {
    constructor(a2, a3) {
        let v1 = this;
        v1--;
        delete v1.g;
    }
}
for (let v6 = 0; v6 < 10; v6++) {
    class C7 extends C0 {
    }
    new C7();
}
gc();
