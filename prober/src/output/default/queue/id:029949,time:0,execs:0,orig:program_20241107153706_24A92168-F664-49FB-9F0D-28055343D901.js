let v0 = 12;
const v1 = v0++;
const v4 = new Uint8Array(13);
for (let v5 = 0; v5 < 5; v5++) {
    for (let i7 = 0, i8 = v1;
        i7 < i8;
        (() => {
            i8--;
            const v14 = createGlobalObject();
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F15(v5, v4);
            for (let i22 = -2976, i23 = 10; i22 !== i23; i23--) {
            }
            v14.Atomics.sub(v4, v5, v5);
        })()) {
    }
}
gc();
