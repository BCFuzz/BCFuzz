function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
class C5 extends F0 {
}
new C5();
function f8() {
    const o10 = {
        ["536870888"]: "536870888",
    };
    return o10;
}
f8();
const v12 = f8();
function f13(a14) {
    const o15 = {
        ...v12,
    };
    return o15;
}
const v16 = f13();
const v17 = f13();
const v18 = f13();
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    const v24 = this.constructor;
    try { new v24(v18, -536870912); } catch (e) {}
    a21[268435441];
    this.h = a23;
    this.f = a22;
}
new F19(v17);
new F19(v16);
gc();
