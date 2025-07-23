class C0 {
}
const v1 = new C0();
("toGMTString").codePointAt;
class C4 extends C0 {
}
new C4();
const v6 = new C4();
v6[1900];
const v8 = `
    function f9() {
    }
    const v10 = f9();
    const v11 = \`
    \`;
    eval(v11);
    const v14 = v10?.small;
    try { v14(); } catch (e) {}
    Int8Array.prototype = Int8Array;
    const v18 = new Int8Array();
    const v19 = v18[50];
    257 !== 257;
    const v23 = Float32Array.name;
    try { v23.concat(); } catch (e) {}
    const v25 = new Float32Array();
    const v26 = v25[71];
    v26 >> v26;
    const v29 = 1286 + 1286;
    v29 / v29;
    Int8Array.BYTES_PER_ELEMENT = Int8Array;
    const v32 = new Int8Array();
    let v33 = v32[486];
    const v34 = v33++;
    v34 === v34;
    const v36 = [-1.1465388272945179e+308];
    const v37 = v36.copyWithin(v19, v36);
    try { v37.reduce(); } catch (e) {}
    const v39 = [-1.0,8.531456716782174,847.7854138654166,1.7976931348623157e+308];
    v39.shift();
    v39[1];
    [-560.6411929155164,1000.0,-Infinity,1000.0,-6.272787585923298];
    function F43() {
        if (!new.target) { throw 'must be called with new'; }
        const v45 = this.constructor;
        try { v45(); } catch (e) {}
        this.f = 5770;
        this.h = 5770;
    }
    const v48 = new F43();
    v48.c = v48;
    new F43();
    const v50 = new F43();
    const v51 = v50.constructor;
    try { v51(); } catch (e) {}
    const v54 = -(-5.0);
    let v55 = v54 >> v54;
    v55++;
    const v58 = [];
    const v59 = [];
    try { v59.forEach(v58); } catch (e) {}
    let v61;
    try { v61 = v59.entries(); } catch (e) {}
    const v62 = v61.next;
    try { v62(); } catch (e) {}
    const v65 = new Set();
    function f66() {
        const o67 = {
        };
        return o67;
    }
    const v68 = f66();
    v68.a = v68;
    const v69 = f66();
    const v70 = f66();
    v70.d = v70;
    v70.a = v70;
    const v73 = new Uint16Array(v68);
    try { v73.reduceRight(f66); } catch (e) {}
    let v76 = 1024;
    v76--;
    Int32Array.BYTES_PER_ELEMENT = Int32Array;
    new Int32Array();
    v69[f66];
    let v83 = new Int32Array(15);
    let v84 = 176;
    v84++;
    const v88 = new Float32Array(0);
    const v89 = v88.forEach;
    try { v89(v1); } catch (e) {}
    let v91 = 0;
    v91 < 5;
    v91++;
    [...v83] = v88;
    const o95 = {
    };
    o95.toString(Float32Array, C4);
    o95.toString(v65, v6);
    const v99 = /\u{12345}/myvis.lastIndex;
    v99 + v99;
`;
eval(v8);
gc();
