const o2 = {
};
const v6 = new Float64Array(3552);
let v8 = 10;
for (; v8--;) {
    const v10 = o2[5];
    let v11;
    try { v11 = v10(); } catch (e) {}
    v6.slice(3552, v11);
}
gc();
