const v0 = `
    /\u{12345}/myvis;
`;
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        const v9 = i5--;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const o22 = {
                set b(a18) {
                    for (let v19 = 0; v19 < 5; v19++) {
                        (v0 + v19).replace(v0, "");
                    }
                },
            };
            o22.b = o22;
        }
        new F10(F10, v9, i5, F10);
    })()) {
}
for (let i27 = v0, i28 = 10; i28--, i28;) {
}
gc();
