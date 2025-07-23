const v1 = 1024 === 1024;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor;
}
try { F2.call(v1); } catch (e) {}
gc();
