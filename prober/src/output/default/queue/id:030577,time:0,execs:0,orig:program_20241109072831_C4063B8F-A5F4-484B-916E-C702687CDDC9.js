const v2 = new Uint32Array(13);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i5 = v3, i6 = 10;
        i5 < i6;
        (() => {
            for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
            }
            const v20 = i6--;
            const v23 = createGlobalObject().Atomics;
            let v24;
            try { v24 = v23.add(i6, v23); } catch (e) {}
            v23.sub(v2, v20, v3, v3, v23, i5, v24);
        })()) {
    }
}
gc();
