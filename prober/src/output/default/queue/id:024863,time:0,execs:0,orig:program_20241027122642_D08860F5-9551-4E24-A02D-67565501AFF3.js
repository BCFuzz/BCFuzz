let v0 = 129;
const v2 = new Int8Array();
function f3() {
    const v4 = new Int8Array(v0);
    v0 = -5;
    return v4;
}
v2.toString = f3;
for (let v6 = 0; v6 < 10; v6++) {
    try { Math.asin(v2); } catch (e) {}
}
gc();
