function f0() {
    return f0;
}
const o18 = {
    toString(a2, a3) {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = /\P{scx=Greek}(\2)(\1)+/dyvs;
            const v10 = `
                const v11 = /\u{12345}/myvis;
                const v14 = Uint8ClampedArray([-4.0,-3.0,1000000000.0,-1.7976931348623157e+308,-4.2267025509389794e+307,0.7757437941691913], a7, a7);
                f0.toString(v14, v11, v10, v9, v14);
            `;
            v9.compile(v10);
        }
        new F4(a3, this, f0);
        return F4;
    },
};
o18.toString(o18, f0, f0);
gc();
