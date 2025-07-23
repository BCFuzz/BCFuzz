const v2 = new Uint8ClampedArray(5);
const v4 = new Uint16Array();
function f5(a6) {
    return v2;
}
v4.toString = f5;
const v7 = v4.toString();
([-1000000000000.0,-1.0,-3.459911917253395,0.26808042109709473,1.3222114634458265e+308,9.646863797986484,-6.226975064707436]).toLocaleString().indexOf(v7);
gc();
