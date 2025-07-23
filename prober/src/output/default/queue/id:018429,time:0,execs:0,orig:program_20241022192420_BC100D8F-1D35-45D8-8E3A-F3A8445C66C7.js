const v0 = [-5.0,1000000.0,0.18901482643115697,-202.2053317319543,-1.7976931348623157e+308,-377.6722675598554,-6.249872431081272e+307,-1000000000000.0];
function f1(a2, a3, a4, a5) {
    for (let v6 = 0; v6 < 10; v6++) {
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
            const v18 = new SharedArrayBuffer(a4, a3);
            const v20 = new DataView(v18);
            try { v20.getUint16(i9); } catch (e) {}
            for (let v22 = 0; v22 < 25; v22++) {
            }
        }
        v0.length &= v6;
    }
    return a2;
}
f1();
gc();
