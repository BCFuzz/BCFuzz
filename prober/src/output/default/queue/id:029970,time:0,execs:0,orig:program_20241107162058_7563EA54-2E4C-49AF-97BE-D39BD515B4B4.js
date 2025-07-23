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
            /\ud808\udf45*[\cA]/mis;
        `;
        const v18 = v15.split(v14);
        try { C11.constructor(v18); } catch (e) {}
    }
}
new F12();
gc();
