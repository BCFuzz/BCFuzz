function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
    this.f = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f9() {
    return v4;
}
if (v4) {
    let v16;
    try { v16 = v5.m(v3, v5); } catch (e) {}
    [v16];
    ("7CX").match;
} else {
}
gc();
