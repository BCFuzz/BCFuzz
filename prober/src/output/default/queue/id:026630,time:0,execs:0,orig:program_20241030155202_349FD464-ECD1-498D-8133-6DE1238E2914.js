function f0() {
    return f0;
}
const v1 = [f0,f0,f0];
for (let [i4, i5] = (() => {
        Object.defineProperty(v1, 0, { configurable: true, get: f0 });
        return [0, 10];
    })();
    i4 < i5;
    (() => {
        const v9 = i5--;
        const o16 = {
            n(a11, a12, a13) {
                const t3 = this.Float16Array;
                new t3(v1);
                return a12;
            },
        };
        const v17 = o16.n;
        v17(v9, v17, v1);
    })()) {
}
gc();
