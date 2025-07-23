function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Int8Array(a2, a2);
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    for (let i = 0; i < 5; i++) {
        42 in v8;
    }
    for (let v10 = 0; v10 < 92; v10++) {
        for (let v11 = 0; v11 < 10; v11++) {
        }
    }
}
new F0(F0);
new F0(F0);
gc();
