const v2 = new Int16Array(3681);
for (const v3 in v2) {
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    const o25 = {
        n(a17, a18, a19) {
            const v20 = this;
            const v21 = v20.Intl;
            const v22 = v21.Locale;
            v22.numberingSystem = "search";
            const v23 = new v22("aWqBm", v22);
            v23.getNumberingSystems("search", Int16Array, a18, v21, "aWqBm");
            return v2;
        },
    };
    const t15 = o25.n;
    t15("search", v2, o25, "aWqBm");
}
gc();
