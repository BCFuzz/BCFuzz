for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 !== i3;
        class C5 {
        }
        const o15 = {
            set d(a7) {
                for (let i = 0; i < 25; i++) {
                    class C8 {
                    }
                    const v9 = new C8();
                    const v12 = ("min").matchAll(a7).next;
                    try { v12(this, v12, this); } catch (e) {}
                    try { v12.call(v9); } catch (e) {}
                }
            },
        };
        o15.d = C5;
        return v4;
    })();
    i3--) {
}
gc();
