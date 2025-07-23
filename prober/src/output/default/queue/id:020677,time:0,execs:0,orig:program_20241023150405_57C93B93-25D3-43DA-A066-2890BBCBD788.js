for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 + i2;
        for (let [i13, i14] = (() => {
                const v5 = [];
                const v6 = [5.0,0.15731719625813334];
                v6.shared = v4;
                v6.minimum = v5;
                const t4 = this.WebAssembly.Memory;
                new t4(v6);
                return [0, 10];
            })();
            i14;
            i14--) {
        }
        return i2 < i3;
    })();
    i3--) {
}
gc();
