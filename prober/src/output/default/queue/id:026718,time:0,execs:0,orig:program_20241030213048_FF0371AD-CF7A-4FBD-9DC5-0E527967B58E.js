const v1 = `
    try {
    } finally {
        /(?:a+)*R\P{gc=Decimal_Number}/mygisu;
    }
`;
const v3 = v1.split();
try { v3.flatMap(eval); } catch (e) {}
gc();
