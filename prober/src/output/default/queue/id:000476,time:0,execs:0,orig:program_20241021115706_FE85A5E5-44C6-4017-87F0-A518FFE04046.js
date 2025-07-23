function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
class C4 extends F0 {
}
const v5 = new C4();
const v6 = `
    const v7 = v3 <= v5;
    let v8 = v7 ^ v7;
    Math.cos(v6);
    let v12 = -534378043;
    const v13 = v12++;
    v12 - 534378043;
    v6 * v12;
    v8--;
    Math.hypot(v13);
`;
eval(v6);
gc();
