const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    a4++;
    const v9 = a4--;
    let v10 = -v9;
    v10--;
    return v9;
}
v2.map(f3);
gc();
