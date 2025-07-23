const v0 = `
    let v1 = [v0,v0,v0,v0,v0];
    function f2() {
        return v1 <<= [6,-1762423995,9007199254740991,-54677,-34760,-9,257];
    }
    const v4 = f2();
    if (!v0) {
        function f5(a6, a7, a8, a9) {
            const o13 = {
                toString(a11, a12) {
                    return a11;
                },
            };
            return v4;
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
