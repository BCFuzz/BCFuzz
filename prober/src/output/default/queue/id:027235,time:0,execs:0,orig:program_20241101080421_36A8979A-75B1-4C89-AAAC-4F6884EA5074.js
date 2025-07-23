const v1 = `
    /x[\u{12345}\u{23456}jA(?:ab)|cde+]/yvgis;
`;
const v3 = v1.split();
try { v3.flatMap(eval); } catch (e) {}
gc();
