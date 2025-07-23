function f1(a2, a3) {
    const o24 = {
        ...a2,
        get d() {
            for (let v5 = 0; v5 < 10; v5++) {
                function f6(a7, a8, a9) {
                    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
                    }
                    ("c" + a7) + a8;
                    return "c";
                }
                f6(-268435456n);
            }
            return -268435456n;
        },
    };
    return o24;
}
f1(f1(f1, -268435456n));
gc();
