function f0() {
    return f0;
}
let v1 = 256n;
const v2 = v1++;
const v3 = v2 >> v2;
function f5(a6, a7, a8, a9) {
    a9 % a9;
    return a6;
}
try { f5(127, f0, 127, v3); } catch (e) {}
gc();
