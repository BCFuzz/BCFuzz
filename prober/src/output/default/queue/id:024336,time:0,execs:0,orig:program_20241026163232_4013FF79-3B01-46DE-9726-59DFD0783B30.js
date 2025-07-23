const v1 = new Float32Array(Float32Array);
function f3(a4) {
    new Int8Array(a4);
    return v1;
}
Int8Array.constructor = f3;
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
const o16 = {
};
const v18 = `
    const o23 = {
        toString(a20, a21) {
            [-1.7976931348623157e+308];
            return v1;
        },
    };
    /\u{12345}/myvis;
`;
const v25 = v18.split(3);
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    a31.constructor(v25);
}
new F26(3, v1, o16, Int8Array);
for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
}
for (let i46 = 0, i47 = 10; i46 < i47; i47--) {
}
gc();
