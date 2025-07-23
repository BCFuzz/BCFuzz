function f0() {
    return f0;
}
function f1() {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
    this.f = f1;
    this.c = f0;
}
const v6 = new F2(F2);
const v7 = new F2(F2, f1);
v6 ** v7;
let v9 = "lQh7G";
2 << --v9;
for (let v13 = 0; v13 < 5; v13++) {
    "p" + v13;
}
for (let v16 = 0; v16 < 250; v16++) {
}
gc();
