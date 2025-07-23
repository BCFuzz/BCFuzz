function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
function f4() {
    const v5 = undefined + F1;
    try { v5.split(F1, v3); } catch (e) {}
}
v3[Symbol.toPrimitive] = f4;
const o10 = {
    [v3]() {
    },
};
gc();
