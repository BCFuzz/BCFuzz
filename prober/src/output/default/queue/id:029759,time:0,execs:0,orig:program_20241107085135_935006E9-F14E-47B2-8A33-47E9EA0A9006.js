for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int32Array(13);
for (let v13 = 0; v13 < 5; v13++) {
    for (let i16 = 0, i17 = 10;
        i16 < i17;
        (() => {
            const v21 = i17--;
            const v23 = createGlobalObject();
            for (let i26 = -2976, i27 = 10; i26 !== i27; i27--) {
            }
            const v34 = v23.Atomics;
            try { v34.wait(v34, Int32Array); } catch (e) {}
            v34.sub(v12, v21, v13);
        })()) {
    }
}
gc();
