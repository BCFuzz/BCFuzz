function f2() {
    return -4294967297;
}
const v3 = [-4294967297];
v3.unit = v3;
const v4 = [f2,f2,f2,v3];
try { v4.toLocaleString(-2.5791223860514156, v3); } catch (e) {}
gc();
