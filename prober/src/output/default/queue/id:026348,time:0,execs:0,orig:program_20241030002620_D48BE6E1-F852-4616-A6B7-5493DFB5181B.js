class C2 {
}
function f3() {
    switch ([2,2,2,2,2]) {
        case 2:
            break;
        case 2:
            break;
        case 0:
            break;
    }
    return 2;
}
C2.toString = f3;
const v6 = new BigUint64Array(0, 0, 0);
const v9 = new Int32Array(681);
function f10(a11, a12, a13, a14) {
    return C2 ** v6;
}
v9.map(f10);
gc();
