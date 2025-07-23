const v1 = `
    /\u{12345}/myvis;
    try {
    } finally {
        /(?:a+)*R\P{gc=Decimal_Number}/mygisu;
    }
`;
const v4 = v1.split();
try { v4.flatMap(eval); } catch (e) {}
gc();
