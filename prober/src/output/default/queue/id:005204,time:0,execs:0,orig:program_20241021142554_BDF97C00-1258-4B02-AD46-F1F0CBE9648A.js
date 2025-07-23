const v0 = [358.77069806708096,-6.753406623418041,0.8945695171621125,6.234056004606608e+307,-1.7976931348623157e+308,-1.7584454582497603e+308,-9.278665440251142];
class C2 extends Array {
}
const v3 = new C2();
function f4(a5) {
    Reflect.construct(Array, v0, a5);
    return a5;
}
v3.constructor = f4;
const v8 = v3.constructor;
try { v8(); } catch (e) {}
gc();
