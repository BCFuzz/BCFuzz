for (let i3 = 0, i4 = 10 + 10;
    (() => {
        const v6 = new SharedArrayBuffer();
        const v8 = new DataView(v6);
        const v9 = v8.getBigUint64;
        try { v9(i4, DataView, i3); } catch (e) {}
        i4--;
        return i4;
    })();
    ) {
}
gc();
