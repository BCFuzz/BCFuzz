function f0(a1) {
    return a1;
}
const v2 = f0.bind();
v2.apply();
class C4 {
    constructor(a6, a7) {
        const v8 = this.propertyIsEnumerable;
        try { v8(v8, this, v2); } catch (e) {}
    }
}
new C4(v2, f0);
gc();
