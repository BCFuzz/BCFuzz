const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v8 = ~a5;
    a4--;
    return -v8;
}
v2.map(f3);
gc();
