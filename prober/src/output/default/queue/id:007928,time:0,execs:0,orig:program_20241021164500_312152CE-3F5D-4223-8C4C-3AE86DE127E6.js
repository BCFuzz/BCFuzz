function f0() {
    for (let i3 = 0, i4 = 10;
        (() => {
            i4++;
            const v6 = i3 < i4;
            const v7 = !v6;
            v7 || v7;
            return v6;
        })();
        i4--) {
        i4--;
    }
    return f0;
}
for (let v15 = 0; v15 < 100; v15++) {
    f0();
}
gc();
