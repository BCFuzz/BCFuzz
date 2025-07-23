for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = [];
function f11() {
    return v10;
}
function f12(a13) {
    const v14 = `
        for (const v15 in a13) {
            break;
        }
    `;
    eval(v14);
    return f12;
}
f11[Symbol.species] = f12;
v10.constructor = f11;
v10.flat(f12);
gc();
