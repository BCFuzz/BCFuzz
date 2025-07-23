function f0() {
}
const v1 = f0();
const v2 = f0();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = /\p{gc=Nd}/mis;
    v6.test(v6);
}
const v8 = new F3();
new F3(v2, v1, v8);
new F3();
for (let v11 = 0; v11 < 250; v11++) {
}
gc();
