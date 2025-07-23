for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        let v8 = [-1.7976931348623157e+308];
        for (let v9 = 0; v9 < 5; v9++) {
            const v11 = Math.floor(v8);
            v11 + v11;
            ++v8;
            for (let v14 = 0; v14 < 1000; v14++) {
                v14++;
            }
        }
    })()) {
}
gc();
