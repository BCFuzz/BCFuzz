const v1 = [9223372036854775807];
const o2 = {
    __proto__: v1,
};
function f3() {
    return 9223372036854775807;
}
o2[Symbol.toPrimitive] = f3;
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    a8.length = a8;
}
new F6(o2);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    a12.pop();
}
new F10(o2);
gc();
