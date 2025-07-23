const v1 = createGlobalObject();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
    for (let i14 = 0, i15 = 10;
        i14 < i15;
        (() => {
            i15--;
            const o21 = {
                __proto__: v1,
            };
            o21.constructor.create(Uint8Array);
        })()) {
    }
}
gc();
