for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3 + i3;
        const v9 = new FinalizationRegistry(FinalizationRegistry);
        try { v9.register(v9, v7, v7); } catch (e) {}
        i3--;
    })()) {
}
gc();
