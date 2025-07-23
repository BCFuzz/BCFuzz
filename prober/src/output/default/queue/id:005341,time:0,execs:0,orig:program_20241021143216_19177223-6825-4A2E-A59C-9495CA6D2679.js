function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
const v4 = v3.constructor;
const v6 = [[v4]];
class C7 {
    #g;
    constructor(a9, a10, a11, a12) {
        const v13 = v6.pop();
        try {
            for (let v14 = 0; v14 < 5000; v14++) {
            }
            v13.#g %= a11;
        } catch(e15) {
        }
    }
}
new C7(F0, v3, C7, F0);
function f17(a18, a19, a20, a21) {
    for (let v23 = 0; v23 < 5; v23++) {
        const v24 = /a\nW/vgi;
        const v25 = /(8)/dygu;
        const v28 = v24.toString().link().split();
        class C29 {
            constructor(a31, a32, a33, a34) {
                a31.toString(a20, v4, v28, a31);
            }
        }
        new C29(v4);
        const v37 = new C29(v25);
        const t31 = v37.constructor;
        new t31(v28);
        const t33 = v37.constructor;
        new t33(255);
    }
    return F0;
}
f17.call();
gc();
