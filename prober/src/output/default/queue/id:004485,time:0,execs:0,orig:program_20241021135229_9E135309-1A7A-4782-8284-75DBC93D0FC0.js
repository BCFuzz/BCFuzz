function f1(a2) {
    function f3() {
        return f3;
    }
    const v4 = Array(a2);
    v4[Symbol.iterator] = f3;
    new Int8Array(v4);
    return Symbol;
}
const v9 = [Array,Array];
v9[Symbol.toPrimitive] = f1;
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    try { this.propertyIsEnumerable(v9); } catch (e) {}
}
new F12();
gc();
