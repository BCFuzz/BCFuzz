const v2 = new Uint8Array(13);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 8;
        i6 < i7;
        (() => {
            i7--;
            const v13 = createGlobalObject();
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F14();
            for (let i21 = -2976, i22 = 10; i21 !== i22; i22--) {
            }
            v13.Atomics.sub(v2, v3, i6);
        })()) {
    }
}
gc();
