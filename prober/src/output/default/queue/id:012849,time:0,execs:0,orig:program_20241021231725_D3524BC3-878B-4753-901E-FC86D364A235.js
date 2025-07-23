const o6 = {
};
o6.g = undefined;
const o7 = {
};
const o8 = {
};
const o9 = {
};
new WeakMap();
const o12 = {
};
class C14 extends Date {
}
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
}
const v23 = `
    const v24 = new Int32Array();
    class C25 {
        valueOf(a27, a28) {
            a27[3] = a27;
            function f29(a30, a31) {
                const o33 = {
                    "maxByteLength": a27,
                };
                o33.e = o33;
                ArrayBuffer(25, o33);
            }
            f29(a28, v24);
        }
    }
    class C37 {
    }
    class C38 extends C37 {
    }
    const v39 = new C25();
    try { v39.valueOf(v39); } catch (e) {}
`;
eval(v23);
const v43 = DataView.constructor;
v43();
class C45 {
}
class C46 extends v43 {
}
undefined !== DataView;
new C14();
gc();
