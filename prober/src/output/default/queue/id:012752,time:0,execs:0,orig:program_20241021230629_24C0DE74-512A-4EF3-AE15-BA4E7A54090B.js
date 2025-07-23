class C0 {
}
const v1 = new C0();
const o8 = {
    toString(a3, a4) {
        this.propertyIsEnumerable(a3);
        try { a3.toString(v1); } catch (e) {}
        for (let v7 = 0; v7 < 50; v7++) {
        }
        return a3;
    },
};
o8.toString(o8);
gc();
