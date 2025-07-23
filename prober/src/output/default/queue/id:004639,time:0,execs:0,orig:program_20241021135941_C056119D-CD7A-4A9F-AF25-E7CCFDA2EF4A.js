class C1 extends Date {
}
const o7 = {
    valueOf(a3, a4) {
        this.prototype.setFullYear();
        return Date;
    },
    __proto__: C1,
};
try { o7.valueOf(); } catch (e) {}
const v9 = `
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        const v16 = this.constructor;
        try { new v16(F10, v9); } catch (e) {}
    }
    new F10(o7, C1, F10, C1);
`;
eval(v9);
gc();
