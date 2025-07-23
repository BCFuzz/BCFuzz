for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i7 = 0, i8 = 10;
            i7 < i8;
            (() => {
                const v13 = new Date();
                v13.getDate();
                class C15 {
                }
                i8--;
            })()) {
        }
    }
    new F1();
}
gc();
