class C1 {
    constructor(a3, a4) {
        this.propertyIsEnumerable(this);
        const t2 = this.__proto__;
        t2[Symbol.toStringTag] = "symbol";
    }
}
new C1("symbol", C1);
new C1();
gc();
