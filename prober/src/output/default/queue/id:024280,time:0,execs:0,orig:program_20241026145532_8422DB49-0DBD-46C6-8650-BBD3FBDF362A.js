const v0 = /jmF/myvgi;
const v1 = v0.toString(v0);
const v2 = `
    let [] = v1;
    /\u{12345}/myvis;
`;
const v5 = Error(v2);
class C6 {
}
try { C6.constructor(v5); } catch (e) {}
gc();
