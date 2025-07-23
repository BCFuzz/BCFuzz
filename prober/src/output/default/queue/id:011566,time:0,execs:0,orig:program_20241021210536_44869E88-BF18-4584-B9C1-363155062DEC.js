function f2() {
    return -2.5791223860514156;
}
function f3() {
    const v5 = new Float64Array();
    return v5;
}
f2.toString = f3;
const v6 = [-4294967297];
v6.roundingMode = f2;
const v7 = [f2,f2,f2,v6];
try { v7.toLocaleString(-2.5791223860514156, v6); } catch (e) {}
gc();
