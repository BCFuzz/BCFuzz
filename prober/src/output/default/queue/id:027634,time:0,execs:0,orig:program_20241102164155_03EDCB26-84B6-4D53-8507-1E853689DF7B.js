const v2 = Date(-6076);
const v4 = `
    Object.defineProperty(v2, "c", { writable: true, value: -6076 in /[tfoo(?=bar)baz]/dvs });
`;
const v7 = v4.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
