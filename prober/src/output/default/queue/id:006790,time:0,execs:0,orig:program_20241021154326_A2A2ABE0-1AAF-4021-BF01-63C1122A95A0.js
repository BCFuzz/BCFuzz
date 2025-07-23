function f0() {
    return f0;
}
const v1 = f0();
const v2 = f0();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a10.toLowerCase(this, "e");
}
new F5(v1, v2, v2, "e");
new F5(v2, v2, v2, "Lo");
for (let v14 = 0; v14 < 250; v14++) {
    v14++;
    v14--;
}
gc();
