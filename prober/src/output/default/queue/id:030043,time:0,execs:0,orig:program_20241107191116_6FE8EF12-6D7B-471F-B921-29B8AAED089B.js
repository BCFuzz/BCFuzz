for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v8 = `
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                let v13 = 200;
                const v14 = v13--;
                for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                }
                const o27 = {
                    "maxByteLength": 3614,
                };
                const v29 = new SharedArrayBuffer(3614, o27);
                const v31 = new Int32Array(v29);
                const v36 = createGlobalObject().Atomics.waitAsync(v31, v13, v31, v14).__defineSetter__;
                try { v36(); } catch (e) {}
                for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
                }
            }
            const v48 = new F9();
            new F9(v48, v48);
            for (let i52 = 0, i53 = 10; i52 != i53; i53--) {
            }
        `;
        for (let i62 = 0, i63 = 10; i62 < i63; i63--) {
            for (let i72 = 0, i73 = 10; i72 < i73; i73--) {
            }
        }
        eval(v8);
    })()) {
}
gc();
