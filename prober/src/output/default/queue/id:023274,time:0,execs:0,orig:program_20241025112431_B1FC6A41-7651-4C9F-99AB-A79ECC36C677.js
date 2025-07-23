for (let i3 = 0, i4 = 10;
    i3 !== i4;
    (() => {
        let v8 = ~i3;
        class C9 extends Uint8ClampedArray {
        }
        const o13 = {
            "maxByteLength": 1073741824,
        };
        const v15 = new ArrayBuffer(512, o13);
        const v16 = new C9(v15);
        Object.defineProperty(v16, 7, { writable: true, configurable: true, value: C9 });
        v8++;
        i4--;
    })()) {
    for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
    }
}
gc();
