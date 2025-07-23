const v0 = [];
const v1 = [v0];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this?.constructor;
    try { new v11(a10, v1, v0, a9); } catch (e) {}
    a9 === v11;
}
new F6(v4, 430.1936344014257);
new F6();
gc();
