for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        let v7 = [-1.7976931348623157e+308];
        for (let v8 = 0; v8 < 5; v8++) {
            Math.floor(v7);
            ++v7;
        }
        i3--;
    })()) {
}
gc();
