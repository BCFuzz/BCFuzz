function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = ("1716506719").constructor;
    const v7 = t2();
    const v8 = v7.toLocaleLowerCase(this, v7, a3);
    const v10 = new Int32Array();
    const v13 = new Uint32Array(1003);
    for (const v14 in v13) {
        for (let v15 = 0; v15 < 5; v15++) {
            v10[v8 + v15] = v15;
        }
    }
}
new F1();
gc();
