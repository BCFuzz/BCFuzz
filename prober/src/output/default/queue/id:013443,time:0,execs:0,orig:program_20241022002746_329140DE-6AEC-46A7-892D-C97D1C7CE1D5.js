const v0 = [];
const o1 = {
};
o1.getPrototypeOf = o1;
const v3 = new Proxy(v0, o1);
class C4 {
}
const v5 = new C4();
function f6(a7, a8) {
    v3.__proto__;
    return v0;
}
v5.constructor = f6;
const v10 = v5.constructor;
try { v10(); } catch (e) {}
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
