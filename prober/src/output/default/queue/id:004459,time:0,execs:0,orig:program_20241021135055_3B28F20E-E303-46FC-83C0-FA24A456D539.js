class C1 extends Date {
}
const o7 = {
    valueOf(a3, a4) {
        const v5 = this.prototype;
        v5.getFullYear();
        return v5;
    },
    __proto__: C1,
};
try { o7.valueOf(); } catch (e) {}
gc();
