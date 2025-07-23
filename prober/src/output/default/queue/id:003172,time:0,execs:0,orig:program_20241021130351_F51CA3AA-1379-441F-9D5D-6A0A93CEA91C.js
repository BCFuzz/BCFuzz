class C0 {
    constructor() {
        for (let i4 = 0, i5 = 10;
            i4 !== i5;
            (() => {
                let v9 = ~i4;
                v9++;
                i5--;
            })()) {
            Math.asin(2147483647, i4);
            for (let v17 = 0; v17 < 25; v17++) {
            }
        }
    }
}
new C0();
gc();
