const v2 = [1000,46308,-256601138,129,-1];
v2[12] = v2;
const v3 = [-1078767095,256,-4294967296,9,257,64637,29259,-1925416899,8,305498475];
Object.defineProperty(v3, Symbol.toPrimitive, { writable: true, enumerable: true, value: Date });
function f6(a7, a8) {
    a7[7] = f6;
    a8[18] = a8;
    const v9 = a7.push(a7, 2.0, f6, a8);
    a8.sort();
    return v9;
}
f6(v2, v3);
f6(v2, v2);
gc();
