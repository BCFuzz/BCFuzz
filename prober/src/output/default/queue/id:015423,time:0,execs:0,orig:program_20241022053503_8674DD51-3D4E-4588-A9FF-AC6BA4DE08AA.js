for (let i2 = 0, i3 = 10;
    i2 !== i3;
    (() => {
        const v9 = new Int8Array(512);
        try { v9.reduce(Symbol); } catch (e) {}
        i3--;
    })()) {
}
gc();
