function f3() {
    return f3;
}
const v4 = [-17.855854914436804];
v4.roundingMode = -9.77127939757346;
const v5 = [f3,f3,f3,v4];
try { v5.toLocaleString(-2.5791223860514156, v4); } catch (e) {}
gc();
