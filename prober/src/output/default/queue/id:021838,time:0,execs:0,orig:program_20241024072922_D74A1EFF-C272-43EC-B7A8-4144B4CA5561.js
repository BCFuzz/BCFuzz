const v2 = createGlobalObject().Float16Array;
let v3 = 8;
const v4 = v3++;
const v5 = new v2(v3);
const v6 = v5.toSorted();
function f7() {
    return Infinity;
}
v6.valueOf = f7;
v6[2] = v6;
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
const v19 = v6.toString();
const v20 = [-1000000000000.0,-1.0,-3.459911917253395,0.26808042109709473,1.3222114634458265e+308,9.646863797986484,-6.226975064707436];
v20.toLocaleString(v4, v20).indexOf(v19);
gc();
