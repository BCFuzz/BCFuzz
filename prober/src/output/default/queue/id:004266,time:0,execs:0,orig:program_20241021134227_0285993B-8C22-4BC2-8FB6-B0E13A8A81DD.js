const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
function f2(a3) {
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        v1.buffer in a6;
    }
    const v11 = new F4();
    return v11;
}
const v12 = [v1];
v12[Symbol.toPrimitive] = f2;
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    try { this.propertyIsEnumerable(v12); } catch (e) {}
}
new F15();
gc();
