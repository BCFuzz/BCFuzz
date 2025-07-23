const v1 = `
    /[tfoo(?=bar)baz]/dvs;
`;
const v3 = v1.split();
try { v3.flatMap(eval); } catch (e) {}
gc();
