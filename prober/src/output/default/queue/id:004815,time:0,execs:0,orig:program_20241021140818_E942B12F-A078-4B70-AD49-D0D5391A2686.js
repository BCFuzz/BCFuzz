function f0() {
    const o2 = {
        ..."127",
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
function f5(a6) {
    const o7 = {
        __proto__: a6,
    };
    return o7;
}
const v8 = f5(v3);
const v10 = v8[1].padEnd();
const v11 = f5();
const v12 = /D/my;
function f13(a14, a15, a16, a17) {
    function F18(a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f22(a23, a24) {
    }
    a14.name = a14;
    try { a16(v4, v4, v4, v12); } catch (e) {}
    a15.length;
    const v27 = [1535927747,-3775,257,1,7];
    const v31 = new Uint8Array(209);
    for (const v32 in v31) {
    }
    let v33 = v27.f;
    const v34 = `
        v33 = Uint32Array;
    `;
    const v36 = eval(v34);
    let v37;
    try { v37 = v36.from(v8); } catch (e) {}
    v37.BYTES_PER_ELEMENT;
    return f13;
}
f13(v10, v10);
const v40 = f13.prototype;
v40.constructor(v4, v40);
const v42 = f13(f13, f13, f13);
v42(v11, v42);
gc();
