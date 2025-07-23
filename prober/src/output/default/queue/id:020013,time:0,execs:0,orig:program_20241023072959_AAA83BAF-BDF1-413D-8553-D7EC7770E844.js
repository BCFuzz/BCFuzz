const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v4 = new t1(8);
const v5 = v4.toSorted();
function f6() {
    return Infinity;
}
v5.valueOf = f6;
v5[2] = v5;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
const v18 = v5.toString(v4, v1);
([-1000000000000.0,-1.0,-3.459911917253395,0.26808042109709473,1.3222114634458265e+308,9.646863797986484,-6.226975064707436]).toLocaleString().indexOf(v18);
gc();
