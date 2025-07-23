const v1 = new Int8Array();
function f2() {
    const v4 = new Float64Array();
    return v4;
}
v1.valueOf = f2;
v1.buffer.transfer();
function f7(a8, a9, a10, a11) {
    const v12 = a8.valueOf();
    v12.fill(a9, v12, v1);
    return a11;
}
try { f7(v1); } catch (e) {}
gc();
