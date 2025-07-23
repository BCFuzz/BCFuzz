const v2 = ["POSITIVE_INFINITY","function"];
function f3() {
    return f3;
}
const v4 = f3.constructor;
try { v4(v2); } catch (e) {}
gc();
