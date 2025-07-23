function f0() {
}
class C1 extends f0 {
    1073741825 = f0;
}
const v2 = new C1();
const v3 = new C1();
function f4(a5, a6, a7, a8) {
    a7[1073741825];
    return a5;
}
f4(v3, f4, f0);
f4(v2, v2, v3);
const v14 = new Int32Array(255);
for (const v15 in v14) {
}
gc();
