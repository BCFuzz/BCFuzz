class C1 {
    constructor(a3, a4, a5) {
        for (let i7 = 0, i8 = 127n;
            i7 < i8;
            (() => {
                const o17 = {
                    toString(a14, a15) {
                        return a14.toString(transferArrayBuffer);
                    },
                };
                try { o17.toString(i7); } catch (e) {}
                o17.toString(o17);
                i8--;
            })()) {
        }
    }
}
new C1(C1, C1, C1);
gc();
