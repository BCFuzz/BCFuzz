const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    let v8 = a4++;
    const v11 = ("p").codePointAt(v8--);
    return v11 * v11;
}
v2.map(f3);
gc();
