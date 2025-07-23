const v0 = `
    /nu((\xed\xa0\x80))\x02[\cZ]/mdu;
`;
function f3(a4) {
    return v0;
}
Date.toString = f3;
new Date(Date);
gc();
