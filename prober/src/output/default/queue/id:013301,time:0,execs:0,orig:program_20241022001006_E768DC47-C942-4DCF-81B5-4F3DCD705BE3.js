function f3() {
    return 1;
}
const v4 = [-4294967297];
v4.trailingZeroDisplay = 1;
const v5 = [f3,f3,f3,v4];
try { v5.toLocaleString(-2.5791223860514156, v4); } catch (e) {}
gc();
