function F1() {
    if (!new.target) { throw 'must be called with new'; }
    let v2 = this;
    v2 >>>= v2;
    const v3 = -(-2.220446049250313e-16);
    v2.constructor.isInteger(v3);
}
new F1();
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
}
gc();
