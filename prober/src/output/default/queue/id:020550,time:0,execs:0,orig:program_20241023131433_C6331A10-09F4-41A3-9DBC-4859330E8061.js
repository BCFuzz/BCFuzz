function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v5 = 0; v5 < 250; v5++) {
    for (let i8 = 0, i9 = 10;
        (() => {
            const v10 = i8 !== i9;
            new F0(-v10, v5);
            return v10;
        })();
        i9--) {
    }
}
gc();
