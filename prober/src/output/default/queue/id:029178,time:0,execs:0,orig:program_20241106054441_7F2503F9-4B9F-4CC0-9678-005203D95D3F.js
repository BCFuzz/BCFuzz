const v3 = [[Date()]];
const v4 = `
    /\u{12345}/myvis;
`;
for (let i8 = 0, i9 = 10;
    i8 < i9;
    (() => {
        i9--;
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            const o26 = {
                set b(a22) {
                    ("p" + v3).replace(v4, "");
                },
            };
            o26.b = o26;
        }
        new F14();
    })()) {
}
gc();
