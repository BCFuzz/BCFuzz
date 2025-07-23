const v0 = [59263,64,1306913287,536870887,97530105,2094742474,55775,-2,-2147483647,1073741825];
class C2 extends Date {
}
const v3 = new C2();
const v4 = v3.setUTCSeconds(v0);
function F5() {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(v7, v7, v3, v4, v4); } catch (e) {}
    Number.isNaN(v3.getYear());
}
new F5();
new F5();
gc();
