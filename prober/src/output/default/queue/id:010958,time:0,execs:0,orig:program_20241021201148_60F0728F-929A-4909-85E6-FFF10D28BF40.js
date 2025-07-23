function f0() {
    return f0;
}
function f1() {
    return f0;
}
const v3 = new Uint32Array();
const o9 = {
    o(a6) {
        v3.fill(super[NaN], this);
        return this;
    },
};
const v10 = o9.o();
v10[Symbol.toPrimitive] = f1;
try { v10.o(); } catch (e) {}
gc();
