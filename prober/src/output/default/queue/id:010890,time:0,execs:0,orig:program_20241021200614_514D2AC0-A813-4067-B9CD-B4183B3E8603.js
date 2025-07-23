for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        try { Math.log1p(15n); } catch (e) {}
        i4--;
    })()) {
}
gc();
