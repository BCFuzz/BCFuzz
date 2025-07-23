function f0(a1, a2, a3, a4) {
    let v5 = a3[1024];
    const v8 = (v5++ ** v5) >>> a2;
    v8 + v8;
    return a4;
}
const v12 = new Float32Array(3008);
v12.filter(f0);
gc();
