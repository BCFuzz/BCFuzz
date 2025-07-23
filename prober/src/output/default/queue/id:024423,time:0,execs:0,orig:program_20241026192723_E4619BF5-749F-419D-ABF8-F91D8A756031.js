for (let i2 = 0, i3 = 10;
    (() => {
        for (let [i43, i44] = (() => {
                const v4 = `
                    async function* f5(a6, a7) {
                        return f5;
                    }
                    f5(f5, v4);
                `;
                for (let i11 = 0, i12 = 10; i11 != i12; i12--) {
                    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                    }
                }
                const v30 = eval(v4);
                v30.next(v30, v4, i3, v4);
                const v32 = [i3,i3,i3];
                function f33(a34) {
                    return i3;
                }
                Object.defineProperty(v32, "valueOf", { writable: true, enumerable: true, value: f33 });
                const v35 = [5.0,0.15731719625813334];
                v35.minimum = v32;
                const t19 = this.WebAssembly.Memory;
                const v39 = new t19(v35);
                v39.buffer;
                return [0, 10];
            })();
            i44;
            i44--) {
        }
        return i2 < i3;
    })();
    i3--) {
}
gc();
