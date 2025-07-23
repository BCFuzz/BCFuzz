for (let i2 = 0, i3 = 10;
    i2 !== i3;
    (() => {
        const v8 = new Uint8Array();
        v8[240];
        i3--;
    })()) {
}
gc();
