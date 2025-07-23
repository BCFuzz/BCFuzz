function f2() {
    const v3 = Date();
    const v4 = v3.constructor;
    v4(v4);
    const v6 = v4();
    const v7 = v6.toString(257, v3);
    const v8 = v4();
    for (let v9 = 0; v9 < 5; v9++) {
        v8[v7 + v6] = v9;
    }
    return v4;
}
const v12 = new Int32Array(257);
v12.map(f2);
gc();
