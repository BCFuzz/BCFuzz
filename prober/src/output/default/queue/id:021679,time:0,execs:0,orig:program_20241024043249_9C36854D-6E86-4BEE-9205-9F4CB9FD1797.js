for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = createGlobalObject().Float16Array;
const v13 = new v12();
for (let i16 = 0, i17 = 10;
    i16 < i17;
    (() => {
        const o21 = {
        };
        const v23 = new Proxy(v13, o21);
        const v24 = new v12();
        const v26 = v24.sort().subarray(v12, i16, i17, v13, v24);
        try { v26.set(v23); } catch (e) {}
        i17--;
    })()) {
}
gc();
