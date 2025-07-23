class C1 {
    get c() {
        let v3 = 0;
        do {
            v3++;
        } while ((() => {
                const v8 = +64;
                const v9 = v3 + 4294967295;
                5.0 * v8;
                return v9 < 10;
            })())
    }
}
const v12 = new C1();
const v15 = new BigUint64Array(586);
for (const v16 of v15) {
    v12.c;
}
gc();
