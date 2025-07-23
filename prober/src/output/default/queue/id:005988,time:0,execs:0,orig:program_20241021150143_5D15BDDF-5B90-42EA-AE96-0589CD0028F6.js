for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v10 = new Date();
        try { v10.setUTCMonth(0n); } catch (e) {}
    })()) {
}
gc();
