const o3 = {
};
try { new DataView(); } catch (e) {}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
new F6(1073741824, -4096);
const v12 = `
    try { new Int16Array(); } catch (e) {}
    const v15 = new Int32Array();
    class C16 {
        valueOf(a18, a19) {
            a18[3] = a18;
            function f20(a21, a22) {
                const o24 = {
                    "maxByteLength": a18,
                };
                o24.e = o24;
                new ArrayBuffer(25, o24);
            }
            f20(a19, v15);
        }
    }
    const v28 = new C16();
    try { v28.valueOf(v28); } catch (e) {}
`;
eval(v12);
gc();
