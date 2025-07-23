for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
let v10 = 128412170;
class C11 {
}
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v14 = 0; v14 < 5; v14++) {
        const v15 = `
            v10++;
        `;
        const v17 = v15.split(v14);
        try { C11.constructor(v17); } catch (e) {}
    }
}
new F12();
gc();
