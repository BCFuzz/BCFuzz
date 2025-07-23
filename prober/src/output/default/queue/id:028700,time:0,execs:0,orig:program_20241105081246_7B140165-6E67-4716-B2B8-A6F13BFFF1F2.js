class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
const v3 = `
    Object.defineProperty(v1.h, "c", { writable: true, configurable: true, enumerable: true, set: f2 });
    /\u{12345}/myvis;
`;
v3.match(/t(ab|cde)\1^a||bceY[](?<a>(?<b>(?<c>(?<d>.).).).)\x3z+/mg);
for (let i10 = 0, i11 = 10; i10 !== i11; i11--) {
}
gc();
