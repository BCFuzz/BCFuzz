const v1 = new Uint32Array(Uint32Array);
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let v12 = 0; v12 < 25; v12++) {
    for (let i15 = 0, i16 = 10;
        i15 < i16;
        (() => {
            let [v20,v21] = v1;
            i16--;
            const v24 = new Date(i15);
            v24.getUTCMilliseconds(v20);
        })()) {
    }
}
gc();
