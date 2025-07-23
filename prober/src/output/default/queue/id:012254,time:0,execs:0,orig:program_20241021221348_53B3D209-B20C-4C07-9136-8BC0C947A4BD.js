for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
    const v12 = createGlobalObject();
    let v13 = 0;
    while ((() => {
            const v15 = v13 < 3;
            const o18 = {
                "maxByteLength": 2507571294,
            };
            new SharedArrayBuffer(1583, o18);
            return v15;
        })()) {
        v13++;
    }
    v12.Atomics;
}
gc();
