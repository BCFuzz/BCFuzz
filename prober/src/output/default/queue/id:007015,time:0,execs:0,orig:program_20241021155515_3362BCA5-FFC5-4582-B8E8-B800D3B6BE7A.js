function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v4 = [-177963933,-498655352,536870888,2147483647,-613604698,1707642562,-65535,1073741824,65536];
function f5(a6, a7) {
    const t8 = a7.constructor;
    const v9 = new t8();
    return v9;
}
f5(64, v2);
f5(v4, v4);
for (let v12 = 0; v12 < 250; v12++) {
}
gc();
