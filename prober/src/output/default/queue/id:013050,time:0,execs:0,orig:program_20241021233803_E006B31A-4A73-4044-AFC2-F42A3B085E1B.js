function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        for (let i4 = (() => {
                for (let v2 = 0; v2 < 5; v2++) {
                }
                return 0;
            })();
            (() => {
                const v6 = i4 < 2;
                v6 && v6;
                return v6;
            })();
            i4++) {
        }
    }
    return f0;
}
for (let v11 = 0; v11 < 50; v11++) {
    f0();
}
gc();
