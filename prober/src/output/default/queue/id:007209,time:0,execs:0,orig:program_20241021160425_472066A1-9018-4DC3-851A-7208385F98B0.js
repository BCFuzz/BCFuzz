const v1 = new BigInt64Array();
class C2 {
}
const v3 = new C2();
new C2();
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    v1.c = a8;
}
const v10 = new F5(v3, v1, v3);
new F5(v10, v10, F5);
const v12 = new F5();
const v13 = [v12];
for (let v14 = 0; v14 < 250; v14++) {
    v14++;
    v14--;
}
for (let v17 = 0; v17 < 5; v17++) {
    v1[v13] = v17;
}
gc();
