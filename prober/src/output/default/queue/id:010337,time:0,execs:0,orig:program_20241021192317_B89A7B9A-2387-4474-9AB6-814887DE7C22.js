const v2 = new Int8Array();
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        const v10 = i6--;
        function F11(a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a13.length = a13;
            const o16 = {
                721126128: 127,
                [v2]: v10,
            };
            o16[721126128] = o16;
            Reflect.ownKeys(o16);
        }
        const v19 = new F11(F11);
        const t12 = v19.constructor;
        new t12(v19);
    })()) {
}
gc();
