let v0 = 0;
do {
    v0++;
} while ((() => {
        class C3 {
            constructor(a5) {
                a5--;
                a5 in this;
            }
        }
        new C3(v0);
        return v0 < 10;
    })())
gc();
