class C2 {
}
const v3 = new C2();
const v4 = new C2();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a7;
    this.g = v4;
    this.d = -12;
}
const v9 = new F5();
const v10 = new F5();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    const t14 = a13.constructor;
    new t14();
    a13.e = a13;
    this.e = a15;
}
const v19 = new F11(v3);
v19.length = v19;
new F11(v10);
new F11(v9);
const v24 = new Int16Array(1880);
for (const v25 in v24) {
}
gc();
