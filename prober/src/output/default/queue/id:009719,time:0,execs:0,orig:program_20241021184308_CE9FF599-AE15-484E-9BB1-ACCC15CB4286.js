class C1 {
}
const v2 = new C1();
const v3 = new C1();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
    this.g = v3;
    this.d = -12;
}
const v8 = new F4();
const v9 = new F4(v3, v3);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a12.e = a12;
    this.e = a14;
    this.constructor = a14;
    this.d = a15;
}
new F10(v2);
new F10(v9);
new F10(v8);
const v21 = new Int16Array(1880);
for (const v22 in v21) {
}
gc();
