function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
new F0();
for (let v4 = 0; v4 < 5; v4++) {
    class C5 {
    }
    const v6 = new C5();
    v6.valueOf();
    for (let v8 = 0; v8 < 250; v8++) {
        v6["bigint" + v8] = v8;
    }
}
gc();
