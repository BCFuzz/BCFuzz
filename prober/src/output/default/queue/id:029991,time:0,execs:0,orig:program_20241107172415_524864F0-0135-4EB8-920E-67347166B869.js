const v2 = new Uint32Array(13);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i5 = v3, i6 = 10;
        i5 < i6;
        (() => {
            eval();
            const v12 = i6--;
            const v15 = createGlobalObject().Atomics;
            let v16;
            try { v16 = v15.add(); } catch (e) {}
            const v17 = v15.sub(v2, v12, v3, v3, v15, i5, v16, v15, i6);
            v17 & v17;
        })()) {
    }
}
gc();
