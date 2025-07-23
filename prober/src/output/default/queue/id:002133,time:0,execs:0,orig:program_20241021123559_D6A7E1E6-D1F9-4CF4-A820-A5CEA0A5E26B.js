class C0 {
    constructor(a2, a3) {
        const o7 = {
            valueOf() {
                const t4 = this[2361];
                super.b = t4();
                return a2;
            },
        };
    }
}
new C0();
const v9 = new C0();
new C0(v9);
for (let v11 = 0; v11 < 250; v11++) {
}
gc();
