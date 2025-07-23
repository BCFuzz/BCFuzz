for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        for (let i = 0; i < 10; i++) {
            const o13 = {
                set b(a10) {
                    "" + a10;
                    for (let v12 = 0; v12 < 50; v12++) {
                    }
                },
            };
            o13.b = o13;
        }
    })()) {
}
gc();
