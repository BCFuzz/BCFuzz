for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        for (let v7 = 0; v7 < 5; v7++) {
            class C9 extends String {
            }
            const v10 = new C9();
            v10.at();
        }
        i3--;
    })()) {
}
gc();
