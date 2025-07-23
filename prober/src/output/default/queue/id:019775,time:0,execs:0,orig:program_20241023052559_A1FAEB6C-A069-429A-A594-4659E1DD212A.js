for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        const v9 = Date();
        try { Uint8Array.fromBase64(v9, 16); } catch (e) {}
        i4--;
    })()) {
}
gc();
