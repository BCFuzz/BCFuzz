const v1 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
function f2(a3, a4) {
    for (let i7 = -65535, i8 = 5; i7 < i8; i8--) {
    }
    const v15 = `
        for (let v16 = 0; v16 < 5; v16++) {
            if ("p" <= -4294967296) {
            } else {
                break;
            }
        }
    `;
    eval(v15);
    return a4;
}
v1[Symbol.toPrimitive] = f2;
const v24 = new Map();
v24 | v1;
gc();
