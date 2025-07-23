for (let i = 0; i < 10; i++) {
    const o7 = {
        set b(a1) {
            for (let v2 = 0; v2 < 5; v2++) {
                const v4 = 9 || v2;
                v2 - (v4 | v4);
            }
        },
    };
    o7.b = o7;
    for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    }
}
gc();
