const v0 = `
    /abc|def/mygu;
    /XR[\xe2\x81\xa3]/vs;
    /(a(?=b))/dygu;
    function f4(a5, a6) {
        const o7 = {
            4294967295: f4,
        };
        return o7;
    }
`;
eval(v0);
gc();
