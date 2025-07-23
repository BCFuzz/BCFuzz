for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    for (let i12 = 0, i13 = 10;
        i12 < i13;
        (() => {
            i13--;
            const o19 = {
            };
            o19.constructor.create(Uint8Array);
        })()) {
    }
}
gc();
