const v2 = [-9007199254740991,-9007199254740991,-9007199254740991,-9007199254740991,-9007199254740991];
const o3 = {
    __proto__: v2,
};
function f4() {
    return 9223372036854775807;
}
o3[Symbol.toPrimitive] = f4;
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9.length = a9;
}
new F7(o3);
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a13.splice(-9007199254740991);
}
try { new F11(o3); } catch (e) {}
gc();
