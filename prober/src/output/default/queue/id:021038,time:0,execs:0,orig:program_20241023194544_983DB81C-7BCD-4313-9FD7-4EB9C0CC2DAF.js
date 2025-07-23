const v0 = `
    function f1(a2, a3) {
        return f1;
    }
    const v5 = new Uint16Array();
    v5.fill().join();
    /\u{12345}/myvis;
`;
const v9 = v0.trimStart(v0, v0, v0);
try { Uint8Array.fromHex(v9); } catch (e) {}
gc();
