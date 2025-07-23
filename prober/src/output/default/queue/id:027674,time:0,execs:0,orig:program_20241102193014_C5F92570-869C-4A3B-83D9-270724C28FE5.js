const v0 = [1e-15];
const v2 = `
    while (v0) {
        /\P{Any}/mygsu;
    }
    /\u{12345}/myvis;
`;
const v5 = v2.split();
try { v5.flatMap(eval); } catch (e) {}
gc();
