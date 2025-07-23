class C2 {
    static m(a4, a5) {
        this?.constructor;
        const v7 = -9007199254740991 | 1073741824;
        super[v7] = v7;
    }
}
const o8 = {
};
const v10 = new Proxy(C2, o8);
const v11 = v10.m;
try { v11(); } catch (e) {}
gc();
