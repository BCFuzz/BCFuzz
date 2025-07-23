function f2(a3) {
    const v4 = [-4.0,-3.0,1000000000.0,-1.7976931348623157e+308,-4.2267025509389794e+307,0.7757437941691913];
    function f5() {
        return a3;
    }
    function f6(a7) {
        return a3;
    }
    Object.defineProperty(v4, -1, { enumerable: true, get: f5, set: f6 });
    v4[-1 << a3] |= -1;
    return -1;
}
const v11 = new Int8Array(255);
v11.every(f2);
gc();
