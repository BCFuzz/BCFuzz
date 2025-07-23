class C0 {
    get c() {
        let v2 = 0;
        do {
            v2++;
        } while ((() => {
                const v7 = +v2;
                v2 + 4294967295;
                5.0 * v7;
                return v2 < 10;
            })())
    }
}
const v11 = new C0();
const v14 = new BigUint64Array(586);
for (const v15 of v14) {
    v11.c;
}
gc();
