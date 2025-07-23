function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = v4.propertyIsEnumerable;
let v6;
try { v6 = v5(); } catch (e) {}
function f8(a9) {
    return this.constructor.is(v6);
}
const v14 = new Int16Array(1055);
v14.sort(f8);
gc();
