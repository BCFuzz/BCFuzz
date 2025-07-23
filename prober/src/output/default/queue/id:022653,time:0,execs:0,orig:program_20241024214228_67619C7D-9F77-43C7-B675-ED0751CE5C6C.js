for (let i3 = 0, i4 = 10;
    (() => {
        i4--;
        class C6 {
            #toString(a8) {
            }
            constructor(a10) {
                try {
                    ("").#toString();
                } catch(e12) {
                }
            }
        }
        new C6(i3);
        return i3 < i4;
    })();
    ) {
}
gc();
