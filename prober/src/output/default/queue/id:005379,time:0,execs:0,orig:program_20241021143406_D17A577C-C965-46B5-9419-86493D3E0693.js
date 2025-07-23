for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        try { WeakRef(i3); } catch (e) {}
    })()) {
}
gc();
