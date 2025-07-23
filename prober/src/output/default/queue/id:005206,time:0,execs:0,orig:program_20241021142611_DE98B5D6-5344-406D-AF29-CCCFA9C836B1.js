for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        class C8 extends Date {
        }
        const o14 = {
            valueOf(a10, a11) {
                const v12 = this.prototype;
                v12.getMinutes();
                return v12;
            },
            __proto__: C8,
        };
        try { o14.valueOf(); } catch (e) {}
        i3--;
    })()) {
}
gc();
