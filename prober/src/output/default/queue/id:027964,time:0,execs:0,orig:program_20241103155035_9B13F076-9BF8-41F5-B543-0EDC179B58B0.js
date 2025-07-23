function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a4 = BigInt64Array;
    Object.defineProperty(this, "a19", { writable: true, configurable: true, enumerable: true, value: F1 });
    this.g = 536870887;
}
const v4 = new F1();
const v5 = new F1();
for (const v6 in v5) {
    for (let v7 = 0; v7 < 25; v7++) {
        const o8 = {
        };
        const v10 = new Proxy(v4, o8);
        v10.toStringTag;
        v4[v6 + v7] = v7;
    }
}
gc();
