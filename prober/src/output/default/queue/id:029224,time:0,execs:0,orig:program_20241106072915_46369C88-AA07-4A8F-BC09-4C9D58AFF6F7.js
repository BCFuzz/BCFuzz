class C0 {
}
const v1 = new C0();
const v3 = `
    v1.replace(/(?<=)(?:a*)*/gisu);
    /\u{12345}/myvis;
`;
const v7 = v3.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
