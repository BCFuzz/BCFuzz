for (let v0 = 0; v0 < 10; v0++) {
    for (let i3 = 0, i4 = 10;
        (() => {
            i4++;
            const v6 = i3 < i4;
            const v7 = ~v6;
            v7 || v7;
            return v6;
        })();
        i4--) {
        i4--;
    }
}
gc();
