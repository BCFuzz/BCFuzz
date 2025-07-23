const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    a5--;
    let v9 = a4++;
    v9 + v9;
    const v11 = v9--;
    -v11;
    const v14 = ("p").codePointAt(v11);
    return v14 * v14;
}
v2.map(f3);
gc();
