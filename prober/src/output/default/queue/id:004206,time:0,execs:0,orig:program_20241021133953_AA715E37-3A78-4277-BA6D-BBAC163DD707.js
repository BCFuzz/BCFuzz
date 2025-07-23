function f0() {
    return f0;
}
const v1 = f0();
f0 = v1;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(v1, a5); } catch (e) {}
    this.c = f0;
}
const v8 = new F2(f0, v1);
new F2(v8, v1);
gc();
