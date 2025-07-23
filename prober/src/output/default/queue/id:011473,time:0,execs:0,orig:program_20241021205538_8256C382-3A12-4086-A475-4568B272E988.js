const v0 = `
    const o5 = {
        ["symbol"](a3) {
            let {...v4} = "symbol";
        },
    };
    o5.symbol("symbol");
    /\u{12345}/myvis;
`;
eval(v0);
gc();
