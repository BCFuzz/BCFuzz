class C1 {
    constructor(a3, a4) {
        super[a3] = a4;
        const v5 = this.toString();
        v5.__proto__ = v5;
    }
}
new C1("536870888");
new C1();
gc();
