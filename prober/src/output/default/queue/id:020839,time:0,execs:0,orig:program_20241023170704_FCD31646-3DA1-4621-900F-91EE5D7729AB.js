for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = createGlobalObject();
const v12 = v11.Float16Array;
const v13 = new v12(createGlobalObject, v12, v11);
for (let i16 = 0, i17 = 10;
    i16 < i17;
    (() => {
        const o21 = {
        };
        const v23 = new Proxy(v13, o21);
        const v24 = new v12();
        const v26 = v24.sort().subarray(v11, v11, v11, i16);
        try { v26.sort(v23); } catch (e) {}
        i17--;
    })()) {
}
gc();
