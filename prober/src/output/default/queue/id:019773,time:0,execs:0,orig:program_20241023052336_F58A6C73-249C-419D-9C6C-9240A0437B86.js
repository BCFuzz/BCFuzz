function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4) {
        super();
        for (let v5 = 0; v5 < 25; v5++) {
            class C6 {
            }
            const v7 = new C6();
            super[v7] = this;
            typeof this === "symbol";
            new Int16Array(this);
            for (let v13 = 0; v13 < 10; v13++) {
            }
        }
    }
}
new C2();
gc();
