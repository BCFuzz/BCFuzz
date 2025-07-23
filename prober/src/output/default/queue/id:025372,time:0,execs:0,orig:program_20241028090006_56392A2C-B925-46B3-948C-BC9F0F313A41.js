for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    (() => {
        const v14 = i12 < i13;
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
        }
        return v14;
    })();
    i13--) {
}
const o30 = {
};
function f31() {
    function f32(a33) {
    }
    const v36 = new Uint8ClampedArray(f32);
    const v37 = `
        let [,v39,v40,...v41] = [-8.481459703944337,5.90596328995101e+307,-7.509925213131483e+307,-1.7976931348623157e+308];
    `;
    const v42 = v37.split(v36);
    try { v42.flatMap(eval); } catch (e) {}
}
o30.toString = f31;
const v45 = new Uint8Array();
v45 % o30;
gc();
