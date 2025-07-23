for (let i = 0; i < 10; i++) {
    const o6 = {
        set b(a1) {
            this ^ a1;
            super.f = this;
            for (let v3 = 0; v3 < 5; v3++) {
                this["p" + v3] = v3;
            }
        },
    };
    o6.b = o6;
}
gc();
