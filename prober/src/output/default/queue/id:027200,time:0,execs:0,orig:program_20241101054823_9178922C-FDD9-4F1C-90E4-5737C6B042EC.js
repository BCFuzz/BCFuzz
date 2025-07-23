class C1 {
    constructor(a3) {
        const v4 = a3.constructor;
        try { new v4(a3); } catch (e) {}
        const v6 = typeof a3;
        v6 == v6;
        v6 === "undefined";
    }
}
new C1("a");
const v11 = new C1(C1);
new C1(C1);
new C1(v11);
gc();
