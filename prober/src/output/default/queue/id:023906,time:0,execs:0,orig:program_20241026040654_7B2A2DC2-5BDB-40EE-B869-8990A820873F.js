function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0, i11 = 59429532; i10 < i11; i11--) {
    }
    const v18 = [a5,a5,a5,a5];
    v18.toString = Date;
    const v19 = ["4294967296",v18];
    for (let v20 = 0; v20 < 5; v20++) {
        class C21 {
            [v19] = v20;
        }
        new C21();
    }
}
new F0(F0, F0, F0, F0);
gc();
