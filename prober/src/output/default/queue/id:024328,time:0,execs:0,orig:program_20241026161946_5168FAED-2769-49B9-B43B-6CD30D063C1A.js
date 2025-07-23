function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            class C15 extends Uint8Array {
                static {
                    for (let i19 = 0, i20 = 10;
                        (() => {
                            const v21 = --i20;
                            const v22 = i19 < i20;
                            super.h = v21;
                            return v22;
                        })();
                        ) {
                    }
                }
            }
        })()) {
    }
}
new F0();
gc();
