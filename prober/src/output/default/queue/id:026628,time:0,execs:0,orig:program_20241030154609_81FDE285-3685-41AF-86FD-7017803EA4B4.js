class C1 {
    constructor(a3, a4) {
        const t2 = this.__proto__;
        t2.valueOf = a4;
    }
    #g = -11;
}
for (let i8 = 0, i9 = 10;
    (() => {
        const v10 = i8 < i9;
        class C11 extends C1 {
        }
        new C11();
        return v10;
    })();
    i9--) {
}
gc();
