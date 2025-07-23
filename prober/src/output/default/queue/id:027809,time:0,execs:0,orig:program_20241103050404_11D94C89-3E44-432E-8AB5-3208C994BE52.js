const v0 = `
    /\u{12345}/myvis;
`;
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const o23 = {
                set b(a18) {
                    for (let v19 = 0; v19 < 5; v19++) {
                        ("p" + v19).replace(v0, "");
                    }
                },
            };
            o23.b = o23;
        }
        new F10(F10, i4, F10, i5);
    })()) {
}
for (let i29 = 0, i30 = 10; i30--, i29 < i30;) {
}
gc();
