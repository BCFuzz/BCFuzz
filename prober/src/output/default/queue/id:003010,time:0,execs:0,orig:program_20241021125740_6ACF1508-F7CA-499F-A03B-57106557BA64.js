function f0(a1) {
    function f2() {
    }
    class C3 {
    }
    const v4 = new C3();
    v4[Symbol.iterator] = f2;
    new Int8Array(v4);
    return f0;
}
const v9 = [f0,f0];
v9[Symbol.toPrimitive] = f0;
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    try { this.propertyIsEnumerable(v9); } catch (e) {}
}
new F12();
gc();
