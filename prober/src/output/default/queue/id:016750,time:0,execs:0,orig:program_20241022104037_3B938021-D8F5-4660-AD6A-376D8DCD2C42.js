const v1 = new Uint32Array();
function f2(a3, a4, a5, a6) {
    try { a3(a5, a3, a6); } catch (e) {}
    for (let v8 = 0; v8 < 5; v8++) {
        v1[0];
        v1[1];
    }
    return a5;
}
for (let v11 = 0; v11 < 50; v11++) {
    f2(f2);
}
gc();
