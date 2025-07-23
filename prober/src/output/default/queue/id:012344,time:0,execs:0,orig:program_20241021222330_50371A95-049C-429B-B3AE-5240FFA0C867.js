for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v9 = ("string").toWellFormed;
        try { v9(); } catch (e) {}
    })()) {
}
gc();
