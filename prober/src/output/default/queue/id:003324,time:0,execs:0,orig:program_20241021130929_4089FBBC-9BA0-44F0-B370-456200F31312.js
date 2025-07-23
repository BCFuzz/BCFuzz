class C1 extends Date {
}
const o6 = {
    valueOf(a3, a4) {
        return a3 instanceof a4;
    },
    __proto__: C1,
};
try { o6.valueOf(65536n, o6); } catch (e) {}
gc();
