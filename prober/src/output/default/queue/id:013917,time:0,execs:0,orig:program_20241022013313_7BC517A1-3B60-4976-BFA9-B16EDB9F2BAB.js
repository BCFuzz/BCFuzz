const t0 = createGlobalObject().Float16Array;
const v4 = new t0(8);
v4[2] = v4;
const v5 = v4.toSorted();
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
const v16 = v5.toString();
([-1000000000000.0,-1.0,-3.459911917253395,0.26808042109709473,1.3222114634458265e+308,9.646863797986484,-6.226975064707436]).toLocaleString().indexOf(v16);
gc();
