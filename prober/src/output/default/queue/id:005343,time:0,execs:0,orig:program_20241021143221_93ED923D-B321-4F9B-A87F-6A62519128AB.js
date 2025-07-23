function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = this;
    this.e = -1910430219;
    this.b = -1910430219;
    this.a = -1910430219;
}
const v3 = new F0();
const v4 = new F0();
if (v3) {
    const o7 = {
        "maxByteLength": 1056,
    };
    const v9 = new SharedArrayBuffer(16, o7);
    new Int8Array(v9);
} else {
    v3.__proto__;
}
const v13 = new F0();
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v13;
}
const v17 = new F14(v4);
new F14(v4);
new F14(F0);
new Uint8ClampedArray(2);
new Int8Array(2399);
new Float64Array(1);
function f29() {
    const o42 = {
        o(a33, a34) {
            const v36 = gc();
            const v37 = ("object")[1073741824];
            super[F14] = v17;
            ["valueOf",a34,v36,v37];
            return "object";
        },
    };
    return F14;
}
("number").search(f29);
gc();
