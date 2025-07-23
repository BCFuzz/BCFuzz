const v1 = `
    function f2(a3, a4) {
        return a3;
    }
    const v6 = new Uint16Array();
    const v8 = v6.fill().join();
    const v9 = v8.replaceAll(f2, v8, v1, f2);
    switch ("n") {
        default:
            let v11 = 0.08677347165770777;
            --v11;
            -9007199254740991 & v9;
            break;
    }
    /\u{12345}/myvis;
`;
eval(v1);
gc();
