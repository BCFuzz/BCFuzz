function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
        }
        class C8 extends C7 {
        }
        Object.defineProperty(C7, 2, { value: NaN });
    }
    new F2();
}
const v10 = new F0();
const v12 = new Uint8ClampedArray(v10, v10, Uint8ClampedArray);
const v13 = `
    /\u{12345}/myvis;
`;
v13.split(v12);
gc();
