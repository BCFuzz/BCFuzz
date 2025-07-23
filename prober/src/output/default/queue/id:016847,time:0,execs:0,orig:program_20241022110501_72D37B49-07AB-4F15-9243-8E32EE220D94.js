for (let i3 = 0, i4 = 10;
    (() => {
        const v5 = i3 !== i4;
        for (let i8 = 0, i9 = 10;
            i8 !== i9;
            (() => {
                const v13 = [-2147483648,-1024];
                const v15 = new ArrayBuffer();
                const v16 = Array.constructor;
                let v17;
                try { v17 = v16(Array); } catch (e) {}
                if (v15 != v17) {
                } else {
                }
                const v19 = v13.includes();
                for (let [i24, i25] = (() => {
                        try { Uint8ClampedArray.from(); } catch (e) {}
                        return [0, 10];
                    })();
                    v19 < i25;
                    i25--) {
                }
                i9--;
            })()) {
        }
        return v5;
    })();
    i4--) {
}
gc();
