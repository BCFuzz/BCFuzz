function f1(a2, a3, a4, a5) {
    const v6 = a4[319];
    let v9 = (~v6 % -1024) ** v6;
    v9--;
    const v11 = v9 >>> v9;
    return v11 + v11;
}
const v15 = new Float32Array(3008);
v15.filter(f1);
gc();
