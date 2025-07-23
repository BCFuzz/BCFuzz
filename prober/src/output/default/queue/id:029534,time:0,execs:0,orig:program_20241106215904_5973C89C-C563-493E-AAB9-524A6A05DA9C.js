function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a4 = BigInt64Array;
}
const v3 = new F1();
const v4 = new F1();
for (const v5 in v4) {
    for (let v6 = 0; v6 < 25; v6++) {
        const o7 = {
        };
        for (let v9 = 0; v9 < 10; v9++) {
        }
        const v10 = new Proxy(v3, o7);
        v10[v5] = o7;
    }
}
gc();
