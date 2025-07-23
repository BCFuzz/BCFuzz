function f0(a1, a2) {
    return a2;
}
for (let v4 = 0; v4 < 5; v4++) {
    for (let i7 = 0, i8 = 10;
        (() => {
            const v9 = i8++;
            const v10 = i7 < i8;
            ("9007199254740991")[v9];
            for (let v12 = 0; v12 < 5; v12++) {
                f0(v4);
            }
            return v10;
        })();
        i8--) {
        i8--;
    }
}
gc();
