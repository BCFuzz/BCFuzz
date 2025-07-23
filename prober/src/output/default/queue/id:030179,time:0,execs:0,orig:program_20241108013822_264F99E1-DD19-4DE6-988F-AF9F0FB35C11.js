for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
for (let i15 = 0, i16 = 10; i15 < i16--;) {
}
for (let i25 = 0, i26 = 10; i26--, i25 < i26;) {
}
for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
}
const v43 = new Int16Array(16);
for (let v44 = 0; v44 < 5; v44++) {
    for (let i47 = 0, i48 = 10;
        i47 < i48;
        (() => {
            i48--;
            const v55 = createGlobalObject().Atomics;
            let v56 = 0;
            do {
                for (let v57 = 0; v57 < 32; v57++) {
                }
                v56++;
            } while (v56 < 6)
            v55.sub(v43, v44, -1185976635);
        })()) {
    }
}
gc();
