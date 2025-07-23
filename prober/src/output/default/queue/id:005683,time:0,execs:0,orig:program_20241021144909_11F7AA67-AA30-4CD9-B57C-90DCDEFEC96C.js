for (let v0 = 0; v0 < 5; v0++) {
    for (let i3 = 0, i4 = 10;
        (() => {
            const v5 = i3 < i4;
            const v7 = new Int32Array(i3, v0, v0);
            v7[8] = Infinity;
            return v5;
        })();
        i4--) {
    }
}
gc();
