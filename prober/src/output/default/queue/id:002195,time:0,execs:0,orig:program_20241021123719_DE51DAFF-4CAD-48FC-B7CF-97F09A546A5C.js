const v0 = /a\nW/vgi;
function f1(a2, a3, a4, a5) {
    const v6 = [-4.0,-3.0,1000000000.0,-1.7976931348623157e+308,-4.2267025509389794e+307,0.7757437941691913];
    const v8 = new Uint8ClampedArray(v6);
    const v9 = v8.constructor;
    for (const v12 of a2.toString(v9, v0, v0, v9, v0).link(f1)) {
    }
    return v6;
}
f1(v0);
gc();
