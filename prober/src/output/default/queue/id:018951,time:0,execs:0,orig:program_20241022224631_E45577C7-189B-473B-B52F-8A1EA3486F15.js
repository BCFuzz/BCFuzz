const v0 = `
    const t1 = /(?:a{5,1000000}){3,1000000}/mdyvgis;
    delete t1?.dotAll;
    /\u{12345}/myvis;
`;
eval(v0);
gc();
