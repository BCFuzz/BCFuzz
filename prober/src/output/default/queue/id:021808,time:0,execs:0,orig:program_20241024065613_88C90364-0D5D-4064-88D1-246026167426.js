function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    fiatInt52(-9223372036854775807);
}
for (let v8 = 0; v8 < 250; v8++) {
    for (let i11 = 0, i12 = 10;
        (() => {
            const v13 = i11 <= i12;
            new F0(!v13, v8);
            return v13;
        })();
        i12--) {
    }
}
gc();
