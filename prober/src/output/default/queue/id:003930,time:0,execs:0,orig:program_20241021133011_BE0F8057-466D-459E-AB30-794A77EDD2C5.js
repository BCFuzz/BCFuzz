class C1 extends Date {
}
const o7 = {
    valueOf(a3, a4) {
        this.prototype.setHours();
        return a4;
    },
    __proto__: C1,
};
try { o7.valueOf(); } catch (e) {}
gc();
