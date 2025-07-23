function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    const v4 = F0 + F0;
    try { v4.split(F0, v2); } catch (e) {}
    F0 << F0;
}
v2[Symbol.toPrimitive] = f3;
const o10 = {
    [v2]() {
    },
};
class C11 extends F0 {
}
gc();
