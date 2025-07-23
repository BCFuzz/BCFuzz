class C1 {
}
const v2 = new C1();
const v3 = new C1();
class C4 {
}
const v5 = new C4();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
    this.g = v3;
    this.d = -12;
}
const v10 = new F6(C1, C4);
const v11 = new F6();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
    a14.e = a16;
    this.constructor = a16;
    this.d = a17;
}
new F12(v2);
new F12(v11);
new F12(v10);
const v23 = new Int16Array(1880);
for (const v24 in v23) {
}
gc();
