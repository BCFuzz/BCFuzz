class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2();
const v8 = v7.constructor;
v8.p4 = v1;
v8.prototype = v8;
new v8(v7, F2);
gc();
