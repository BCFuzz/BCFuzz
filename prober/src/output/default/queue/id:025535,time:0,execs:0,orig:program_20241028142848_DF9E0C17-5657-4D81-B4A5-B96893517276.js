function f1(a2, a3, a4, a5) {
    let v6 = a4[1024];
    const v9 = (v6++ && 536870887) ** v6;
    const v10 = v9 >>> v9;
    v10 + v10;
}
const v14 = new Float32Array(3008);
v14.filter(f1);
gc();
