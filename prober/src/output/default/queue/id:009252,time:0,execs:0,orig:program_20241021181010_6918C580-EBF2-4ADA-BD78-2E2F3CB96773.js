const v3 = new Int8Array();
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        const v11 = i7--;
        function F12(a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            a14.length = a14;
            const o17 = {
                721126128: 127,
                [v3]: v11,
                "c": v3,
            };
            Reflect.ownKeys(o17).keys();
        }
        const v21 = new F12(F12);
        const t12 = v21.constructor;
        new t12(Uint8ClampedArray);
    })()) {
}
gc();
