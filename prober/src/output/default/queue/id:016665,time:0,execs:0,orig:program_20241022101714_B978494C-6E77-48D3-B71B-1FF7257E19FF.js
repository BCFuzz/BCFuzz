function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F4();
    const v8 = new Int32Array(v6);
    const v11 = new Uint32Array(1003);
    for (const v12 in v11) {
        for (let v13 = 0; v13 < 5; v13++) {
            v8[v12] = v13;
        }
    }
}
new F0();
gc();
