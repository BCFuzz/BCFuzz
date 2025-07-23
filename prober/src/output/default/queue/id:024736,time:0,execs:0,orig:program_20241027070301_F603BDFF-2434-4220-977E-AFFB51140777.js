const o0 = {
};
function f1() {
    function f2(a3) {
        return o0;
    }
    const v6 = new Uint8ClampedArray(f2);
    const v7 = `
        [-8.481459703944337,5.90596328995101e+307,-7.509925213131483e+307,-1.7976931348623157e+308];
    `;
    const v9 = v7.split(v6);
    let v10;
    try { v10 = v9.flatMap(eval); } catch (e) {}
    return v10;
}
o0.toString = f1;
const v12 = new Uint8Array(o0, o0, Uint8Array);
v12 % o0;
gc();
