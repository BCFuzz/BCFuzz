function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a7[0] = this;
    a8.g = a8;
    this.a = v2;
    this.h = a7;
}
new F5(v3, v4);
const v10 = new F5(v3, v4);
new F5(v4, v2);
v10 !== v2;
for (let v13 = 0; v13 < 250; v13++) {
}
gc();
