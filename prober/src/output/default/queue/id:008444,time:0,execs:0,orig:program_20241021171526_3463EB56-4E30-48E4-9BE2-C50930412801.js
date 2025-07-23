class C1 {
    constructor(a3) {
        let v4 = delete a3?.c;
        v4 += v4;
    }
    c = 6;
}
const v5 = new C1();
const v6 = new C1(v5);
new C1(v6);
const v10 = new Uint8Array(567);
for (const v11 of v10) {
}
gc();
