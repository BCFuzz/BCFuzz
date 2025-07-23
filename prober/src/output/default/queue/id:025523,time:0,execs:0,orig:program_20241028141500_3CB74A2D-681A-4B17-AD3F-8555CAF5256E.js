const v1 = new Date();
const v4 = JSON["stringify"](v1);
function F5() {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = this.__defineSetter__.constructor;
    t4(v4);
}
new F5();
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
