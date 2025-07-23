class C1 extends Date {
}
const o7 = {
    valueOf(a3, a4) {
        this.prototype.getHours(a3, a4);
        return a3;
    },
    __proto__: C1,
};
try { o7.valueOf(C1); } catch (e) {}
gc();
