function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v5 = 0; v5 < 10; v5++) {
    for (let i8 = 0, i9 = 10;
        (() => {
            const v10 = i8 !== i9;
            const v11 = -v10;
            for (let v12 = 0; v12 < 5; v12++) {
            }
            new F0(v11);
            return v10;
        })();
        i9--) {
    }
}
gc();
