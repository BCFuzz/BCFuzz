for (let i2 = 0, i3 = 10;
    (() => {
        for (let [i14, i15] = (() => {
                const v4 = [];
                const v5 = [5.0,0.15731719625813334];
                v5.minimum = v4;
                const v7 = this.WebAssembly;
                const t4 = v7.Memory;
                const v9 = new t4(v5);
                const v10 = v9.type;
                try { v10(v7, i2, v7, i2, this); } catch (e) {}
                return [0, 10];
            })();
            i15;
            i15--) {
        }
        return i2 < i3;
    })();
    i3--) {
}
gc();
