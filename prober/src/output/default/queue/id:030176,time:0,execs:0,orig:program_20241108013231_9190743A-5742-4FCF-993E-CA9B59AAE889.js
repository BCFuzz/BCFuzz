for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let i14 = 0, i15 = 10; i14 < i15--;) {
}
for (let i24 = 0, i25 = 10; i25--, i24 < i25;) {
}
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
const v42 = new Int16Array(16);
for (let v43 = 0; v43 < 5; v43++) {
    for (let i46 = 0, i47 = 10;
        i46 < i47;
        (() => {
            i47--;
            const v54 = createGlobalObject().Atomics;
            let v55 = 0;
            do {
                for (let v56 = 0; v56 < 32; v56++) {
                }
                v55++;
            } while (v55 < 6)
            v54.sub(v42, v43, v55);
        })()) {
    }
}
gc();
