function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
    this.h = a7;
    this.f = a7;
}
const v9 = new F5();
const v10 = new F5(v3);
for (let v11 = 0; v11 < 5; v11++) {
}
v9[true] = v10;
F0--;
for (let v13 = 0; v13 < 5; v13++) {
}
for (let v14 = 0; v14 < 25; v14++) {
}
for (let v15 = 0; v15 < 5; v15++) {
    v15++;
    v15--;
}
for (let v18 = 0; v18 < 250; v18++) {
}
gc();
