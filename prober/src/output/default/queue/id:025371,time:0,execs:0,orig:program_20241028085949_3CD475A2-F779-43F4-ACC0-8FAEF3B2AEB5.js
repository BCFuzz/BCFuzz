const v0 = `
    const v1 = /\u{12345}/myvis;
    function f2(a3, a4) {
        for (let i7 = 0, i8 = 10;
            i7 < i8;
            (() => {
                try { a4(i8, new.target); } catch (e) {}
            })()) {
        }
        return v1;
    }
`;
eval(v0);
gc();
