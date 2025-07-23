function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F3();
const v10 = new F3();
function f12() {
    const v13 = [-12,9,-1024,-335027118];
    for (let i = 0; i < 5; i++) {
        ("-789426228")["charCodeAt"](v10, F0, v9, ...v13);
    }
}
const v18 = new Uint16Array(1000);
v18["some"](f12);
gc();
