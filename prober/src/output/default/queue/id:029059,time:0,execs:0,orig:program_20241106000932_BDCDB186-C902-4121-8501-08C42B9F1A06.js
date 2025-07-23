const v1 = `
    /b\[\]\{\}\(\)\%\^\ R\u{12345}/dvg;
`;
const v3 = v1.split();
try { v3.flatMap(eval); } catch (e) {}
gc();
