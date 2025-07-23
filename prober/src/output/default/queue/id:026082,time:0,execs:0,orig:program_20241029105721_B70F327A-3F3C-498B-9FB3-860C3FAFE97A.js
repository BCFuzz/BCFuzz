function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10;
        (() => {
            let v9 = i7 < i8;
            for (let i = 0; i < 5; i++) {
                v9 &= delete this[-2n];
            }
            return v9;
        })();
        i8--) {
    }
}
new F1();
gc();
