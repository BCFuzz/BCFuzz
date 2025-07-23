for (let i2 = 0, i3 = 10;
    i3--, i2 < i3;
    (() => {
        const o10 = {
            "maxByteLength": 3576,
        };
        const v12 = new ArrayBuffer(58, o10);
        const v14 = new Uint16Array(v12);
        for (let [i19, i20] = (() => {
                delete v14[11];
                return [0, 10];
            })();
            i20;
            i20--) {
        }
    })()) {
}
gc();
