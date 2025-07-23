function f0() {
    const o2 = {
        ..."394",
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(this, a8); } catch (e) {}
    a8[3378581143] = a8;
}
new F5(v3, v4);
gc();
