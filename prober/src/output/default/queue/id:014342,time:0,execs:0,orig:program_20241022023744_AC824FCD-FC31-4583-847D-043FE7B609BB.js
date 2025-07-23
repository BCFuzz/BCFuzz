function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 14;
}
const v3 = new F0();
const v4 = [v3,v3,v3,v3,v3];
const v5 = v3.c;
const o20 = {
    toString(a7, a8) {
        new Set([-1.1196905033754436e+308,8.016593422763634]);
        new Float64Array(2492);
        const t11 = v4[this];
        Int16Array(t11(257));
        return F0;
    },
};
try { v5.toString(o20); } catch (e) {}
gc();
