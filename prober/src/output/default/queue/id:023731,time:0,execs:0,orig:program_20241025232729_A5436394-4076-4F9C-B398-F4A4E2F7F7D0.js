const v2 = createGlobalObject();
const t1 = v2.Float16Array;
const v5 = new t1(8);
function f6() {
    return 28404;
}
v5[Symbol.toPrimitive] = f6;
v5[2] = v5;
const v9 = v5.toSorted(f6, v2);
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = v9.toString();
([-1000000000000.0,-1.0,-3.459911917253395,0.26808042109709473,1.3222114634458265e+308,9.646863797986484,-6.226975064707436]).toLocaleString().indexOf(v20);
gc();
