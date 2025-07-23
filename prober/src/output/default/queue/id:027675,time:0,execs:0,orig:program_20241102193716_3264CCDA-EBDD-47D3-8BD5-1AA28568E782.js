function f0() {
    return f0;
}
const v1 = [f0];
for (let [i4, i5] = (() => {
        Object.defineProperty(v1, 0, { configurable: true, get: f0 });
        return [0, 10];
    })();
    i4 < i5;
    (() => {
        const v9 = i5--;
        const o17 = {
            n(a11, a12, a13) {
                a13.push(a11);
                const t3 = this.Float16Array;
                new t3(v1);
                return a12;
            },
        };
        const v18 = o17.n;
        v18(v9, v18, v1);
    })()) {
}
gc();
