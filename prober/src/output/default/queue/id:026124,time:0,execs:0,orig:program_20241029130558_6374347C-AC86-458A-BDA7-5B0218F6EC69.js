for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        let v8 = 1;
        v8--;
        Math.max(v8, -v8);
        i3--;
    })()) {
}
gc();
