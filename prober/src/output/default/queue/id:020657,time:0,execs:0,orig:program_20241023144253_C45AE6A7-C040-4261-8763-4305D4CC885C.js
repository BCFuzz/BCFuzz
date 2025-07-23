function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5) {
}
v2[Symbol.toPrimitive] = f3;
class C9 {
}
const v10 = new C9();
const v11 = new C9();
const t11 = v2 <= v11 ? v2 : v11;
t11[Symbol.toStringTag] = Float32Array;
this.constructor.assign(v10, v11);
gc();
