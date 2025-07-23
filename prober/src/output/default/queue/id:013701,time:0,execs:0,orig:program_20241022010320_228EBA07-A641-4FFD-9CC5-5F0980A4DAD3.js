function f0(a1) {
    let v2 = Uint16Array;
    function f3() {
        v2--;
        return f0;
    }
    v2.valueOf = f3;
    const v5 = new v2(v2, f3, f0, v2, f0);
    return v5.fill(v5, v2);
}
const v7 = [f0];
v7[Symbol.toPrimitive] = f0;
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    try { this.propertyIsEnumerable(v7); } catch (e) {}
}
new F10();
gc();
