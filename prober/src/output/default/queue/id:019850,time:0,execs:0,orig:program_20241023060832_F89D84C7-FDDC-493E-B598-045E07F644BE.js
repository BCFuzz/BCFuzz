function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v6 = new Proxy(Uint32Array, v3);
BigUint64Array.from(v3).sort(v6);
for (let v9 = 0; v9 < 5; v9++) {
    const v10 = v9 / v9;
    for (let i12 = 0, i13 = v10; i13--, i12 < i13;) {
    }
}
gc();
