function f0() {
    const o3 = {
        set d(a2) {
        },
    };
    return o3;
}
const v4 = f0();
const v5 = f0();
const v6 = f0();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { new v11(F7, F7); } catch (e) {}
    a9.e = a9;
    a10.isPrototypeOf();
    this.e = v4;
}
new F7(v6, v4);
new F7(v5, v6);
new F7(v4, v5);
gc();
