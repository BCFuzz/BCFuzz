for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    return f10;
}
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F12();
const v18 = v17.constructor;
const v20 = ("-13")[undefined];
function f21(a22, a23) {
    const v24 = a23.constructor;
    v24.prototype = v24;
    const v25 = new v24();
    return v25;
}
f21(v20, v17);
Object.defineProperty(v18, 0, { enumerable: true, get: f10, set: f21 });
for (let i29 = 0, i30 = 10;
    i29 < i30;
    (() => {
        i30--;
        for (let i37 = -3, i38 = 10; i37 < i38; i38--) {
        }
    })()) {
}
const v47 = `
    ([-1.2028106618412095e+308,-0.0,-1e-15,0.764549454823634,-1000.0,-1.692984977567507])[-1];
`;
eval(v47);
for (let i54 = 0, i55 = 10; i54 < i55; i55--) {
}
gc();
