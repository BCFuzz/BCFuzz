for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    const v11 = /1abc|def|ghi\ud808\udf45*xyz{0,1}/mdyiu;
    const v12 = [-268435456];
    function f13() {
        return v11;
    }
    const v14 = f13 + v12;
    const v17 = [v10,v10];
    v17.unit = v14;
    const v18 = ["YlW",904623.0599490013];
    try { v18.toLocaleString("YlW", v17); } catch (e) {}
`;
eval(v10);
gc();
