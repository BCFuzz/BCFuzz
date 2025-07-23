for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        for (let v7 = 0; v7 < 10; v7++) {
            const o13 = {
                toString(a10, a11) {
                    a10.toString(transferArrayBuffer);
                    return a11;
                },
            };
            o13.toString(o13);
        }
        i3--;
    })()) {
}
gc();
