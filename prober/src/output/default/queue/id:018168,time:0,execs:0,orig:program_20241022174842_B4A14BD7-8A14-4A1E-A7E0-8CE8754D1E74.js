for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        function F9() {
            if (!new.target) { throw 'must be called with new'; }
            for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
                class C21 extends Date {
                }
                C21.e = C21;
            }
        }
        new F9();
    })()) {
}
const o25 = {
    ...Date,
};
gc();
