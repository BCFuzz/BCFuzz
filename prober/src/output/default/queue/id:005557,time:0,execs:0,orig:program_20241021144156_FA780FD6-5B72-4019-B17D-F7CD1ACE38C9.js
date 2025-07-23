function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
const v7 = new F2();
const v8 = `
    delete v6[4];
`;
eval(v8);
const v14 = new Float32Array(2663);
const v16 = new Uint8Array();
127 == Int16Array ? 127 : Int16Array;
let v19;
try { v19 = v7.p(); } catch (e) {}
try { v19(); } catch (e) {}
for (const v21 in v14) {
    function f22(a23, a24, a25, a26) {
        const o27 = {
            ...v16,
        };
        return a25;
    }
    f22();
}
gc();
