const v0 = /huxyz{1,}/gi;
let v2;
try {
const t0 = -1.0;
v2 = t0();
} catch (e) {}
let v3;
try { v3 = v2(v2, v0, -1.0, -1.0); } catch (e) {}
let v4;
try { v4 = v3(v3, -1.0, v0); } catch (e) {}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const o9 = {
    };
    for (let v10 = 0; v10 < 5; v10++) {
        const v12 = new Uint8Array(v10);
        v12[9] = Uint8Array;
    }
    const v15 = new Uint32Array(1003);
    const v16 = `
        function f17(a18, a19) {
            return v3;
        }
    `;
    eval(v16);
    for (const v22 in v15) {
        try { v4(v0, a7); } catch (e) {}
        delete v0[-2];
        for (let v25 = 0; v25 < 5; v25++) {
        }
    }
}
new F5();
gc();
