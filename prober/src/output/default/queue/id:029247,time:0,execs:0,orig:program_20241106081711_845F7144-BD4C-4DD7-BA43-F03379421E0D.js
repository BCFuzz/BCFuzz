function f2() {
    const v4 = Date().constructor;
    const v5 = v4();
    const v6 = v5.toString(v5);
    const v7 = v4();
    for (let v8 = 0; v8 < 5; v8++) {
        v7[v6 + v5] = v8;
    }
    return f2;
}
const v11 = new Int32Array(257);
v11.map(f2);
gc();
