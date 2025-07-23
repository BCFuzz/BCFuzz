const v2 = new Uint32Array();
let v3;
try { v3 = v2.reduce(Uint32Array); } catch (e) {}
function f4() {
    ("-789426228").constructor.fromCharCode(v3);
}
const v9 = new Uint16Array(1000);
v9["some"](f4);
gc();
