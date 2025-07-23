function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
const v22 = createGlobalObject();
const v23 = F16.__proto__;
const o24 = {
};
const v26 = new Proxy(v23, o24);
v26.__proto__ = v22;
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
for (let i39 = 0, i40 = 10;
    (() => {
        const v41 = i39 < i40;
        class C42 extends F0 {
            static #b;
        }
        return v41;
    })();
    i40--) {
}
gc();
