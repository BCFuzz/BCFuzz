const v1 = new Uint8ClampedArray();
const v2 = `
    /\u{12345}/myvis;
`;
const v4 = v2.split(v1);
function f5(a6, a7) {
    const v10 = ("y").fontsize(a7, f5).toLocaleLowerCase();
    for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    }
    return v10;
}
v4[Symbol.toPrimitive] = f5;
v4.join(v4);
gc();
