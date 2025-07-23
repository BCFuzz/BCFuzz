for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v8 = new WeakSet();
        const v9 = v8.has;
        try { v9(); } catch (e) {}
        i3--;
    })()) {
}
gc();
