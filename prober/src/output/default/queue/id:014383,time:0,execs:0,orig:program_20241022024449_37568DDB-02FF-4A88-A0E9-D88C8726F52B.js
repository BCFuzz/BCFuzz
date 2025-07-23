const v0 = [4294967296,-2147483648,708480895,120774386,1024,9,50077,536870888];
function f1(a2, a3, a4, a5) {
    const v8 = new Uint8Array(209);
    for (const v9 in v8) {
    }
    for (let i = 0; i < 5; i++) {
        const v11 = new ArrayBuffer(a3, v8);
        const v13 = new DataView(v11);
        const v14 = v13.__proto__;
        try { v14.getFloat32(v0, a2); } catch (e) {}
    }
    return a3;
}
f1(v0, v0, v0, f1);
f1.prototype.constructor();
gc();
