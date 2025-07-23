function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 65535;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = a8?.constructor;
    try { new v10(); } catch (e) {}
    this.b = a8;
}
F6.length;
const v13 = new F6(v5, v4);
const v14 = new F6(v4, v13);
const v15 = new F6(v14, v13);
v15.length = v15;
~-2n;
-13n > -13n;
[929766142];
[3];
615185542n >= 615185542n;
const v27 = new Int16Array(165);
v27.toLocaleString(615185542n);
[12691,1000,31738,-1404137003];
const v32 = new Float64Array(130);
try { Uint16Array.of(); } catch (e) {}
const v35 = new Uint16Array(v32, 130, 130);
function f36(a37) {
    return v32;
}
v35.toString = f36;
v35.toString();
[-1000000000000.0,-1.0,-3.459911917253395,0.26808042109709473,1.3222114634458265e+308,9.646863797986484,-6.226975064707436];
gc();
