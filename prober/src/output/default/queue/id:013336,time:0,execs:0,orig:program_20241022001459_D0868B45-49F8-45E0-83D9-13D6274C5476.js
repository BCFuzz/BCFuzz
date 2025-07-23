for (let v0 = 0; v0 < 5; v0++) {
    for (let i3 = 0, i4 = 10;
        i3 < i4;
        (() => {
            i4--;
            const o11 = {
                "maxByteLength": 64,
            };
            const v13 = new ArrayBuffer(64, o11);
            const v15 = new Float32Array(v13);
            v15.byteOffset;
        })()) {
    }
}
gc();
