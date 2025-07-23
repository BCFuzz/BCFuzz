function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new BigInt64Array(1000);
    const v6 = [Reflect,Reflect];
    Reflect.apply(v6.flat, v4, v6);
}
new F0();
new F0();
new F0();
gc();
