for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        try { ("").replace("", ""); } catch (e) {}
    })()) {
}
gc();
