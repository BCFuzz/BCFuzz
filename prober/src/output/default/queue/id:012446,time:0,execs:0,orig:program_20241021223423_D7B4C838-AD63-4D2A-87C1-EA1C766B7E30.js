const v0 = `
    let v1 = 0;
    do {
        v1++;
    } while ((() => {
            function f4() {
                /\u{12345}/myvis;
                return f4;
            }
            eval();
            return v1 < 2;
        })())
`;
eval(v0);
gc();
