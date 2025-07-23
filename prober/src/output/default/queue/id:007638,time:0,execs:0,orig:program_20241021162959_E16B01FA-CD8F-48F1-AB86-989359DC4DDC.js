for (let i = 0; i < 10; i++) {
    const o7 = {
        set b(a1) {
            for (let i = 0; i < 10; i++) {
                class C2 {
                    constructor() {
                        this.g = this;
                    }
                    set g(a5) {
                    }
                    #f;
                }
                new C2();
            }
        },
    };
    o7.b = o7;
}
gc();
