for (let i2 = 10, i3 = 10; -13369 !== i3; i3--) {
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
}
const v13 = new F11();
for (let v14 = 0; v14 < 5; v14++) {
    const o15 = {
    };
    const v17 = new Proxy(v13, o15);
    v17[""] = o15;
}
gc();
