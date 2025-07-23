for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v8 = Date();
        try { Uint8Array.fromBase64(v8); } catch (e) {}
        i3--;
    })()) {
}
gc();
