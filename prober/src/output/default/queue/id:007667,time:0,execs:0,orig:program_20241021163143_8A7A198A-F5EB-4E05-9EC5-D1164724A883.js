class C0 {
}
const v1 = new C0();
for (let i = 0; i < 10; i++) {
    const o7 = {
        set b(a3) {
            for (let i = 0; i < 10; i++) {
                class C4 {
                    constructor() {
                        this.g = this;
                        this.g = v1;
                    }
                    #f;
                }
                new C4();
            }
        },
    };
    o7.b = o7;
}
gc();
