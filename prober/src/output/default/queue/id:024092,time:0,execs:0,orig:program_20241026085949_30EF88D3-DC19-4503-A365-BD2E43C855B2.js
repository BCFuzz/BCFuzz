function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this?.constructor;
    try { new v9(); } catch (e) {}
    a7 === v9;
}
const v12 = new F4(v2, 430.1936344014257);
new F4(v12, v2, 430.1936344014257);
gc();
