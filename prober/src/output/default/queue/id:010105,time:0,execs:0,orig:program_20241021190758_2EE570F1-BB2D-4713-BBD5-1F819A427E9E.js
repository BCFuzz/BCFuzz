function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const t3 = F0.constructor;
t3();
function f6() {
}
class C8 extends f6 {
}
const v9 = new C8();
v9.length = "4096";
Uint16Array.from(v9);
gc();
