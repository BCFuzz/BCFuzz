const v0 = /(?:a?)*/mdygis;
function f1() {
    function f2() {
        return v0;
    }
    return f2;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(v0, Symbol.toPrimitive, { get: f1, set: f3 });
const v8 = new Int32Array();
let v9;
try { v9 = v8.join(v0); } catch (e) {}
const v10 = /n(a)\1/mdyvgis;
function f11() {
    const o12 = {
    };
    o12.toJSON = v9;
    o12.b = o12;
    JSON.stringify(o12);
    return f1;
}
v10.toString = f11;
try { v10.toString(); } catch (e) {}
gc();
