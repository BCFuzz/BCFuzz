let v1 = new Int8Array();
for (let i4 = 0, i5 = 10;
    --v1, i4 < i5;
    (() => {
        const v10 = i5--;
        function F11(a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const o16 = {
                "c": this,
                [v1]: v10,
                "c": v1,
            };
            Reflect.ownKeys(o16);
        }
        const v19 = new F11();
        const t11 = v19.constructor;
        new t11(Int8Array);
    })()) {
}
for (let i27 = 0, i28 = 10; Reflect.construct(Int32Array, [i27]) < i28;) {
    i28--;
}
gc();
