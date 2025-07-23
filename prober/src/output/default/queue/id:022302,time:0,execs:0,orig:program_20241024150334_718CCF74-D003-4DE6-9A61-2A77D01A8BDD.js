const v0 = `
    let v1 = /\u{12345}/myvis;
    v1 ||= v1;
`;
const v3 = Error(v0);
class C4 {
}
try { C4.constructor(v3); } catch (e) {}
gc();
