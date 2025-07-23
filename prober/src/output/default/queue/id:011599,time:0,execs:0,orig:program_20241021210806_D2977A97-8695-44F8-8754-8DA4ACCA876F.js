const v1 = `
    Float32Array.g = Float32Array;
    const v3 = new Float32Array();
    try { v3.findIndex(-2.2250738585072014e-308); } catch (e) {}
    let v5;
    try { v5 = v3.sort(Float32Array); } catch (e) {}
    try { v5.sort(v5); } catch (e) {}
    function f7() {
    }
    const v8 = f7.bind();
    v8.name;
    v8.length = v8;
    const v10 = /\u{12345}/myvis;
    try { v10.toString(); } catch (e) {}
    let v12;
    try { v12 = v10.toString(); } catch (e) {}
    const v13 = v12.includes;
    try { v13(v5); } catch (e) {}
    let [,,v15,v16] = v3;
`;
eval(v1);
gc();
