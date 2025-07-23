for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        class C8 {
            constructor(a10) {
                const v11 = typeof this;
                try { v11.indexOf(i2); } catch (e) {}
                ("boolean").replace(v11, v11);
            }
        }
        const v15 = new C8();
        const t9 = v15.constructor;
        new t9();
    })()) {
}
gc();
