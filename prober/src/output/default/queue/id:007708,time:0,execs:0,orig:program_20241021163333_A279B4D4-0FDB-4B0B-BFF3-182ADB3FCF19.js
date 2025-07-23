const v1 = new Uint8ClampedArray();
const v2 = [2.0,-378.1903093867313,2.0,-919.9057460769926,0.9142489726148814,1.7783404075732813e+307,-2.2250738585072014e-308];
function f3() {
    const v6 = v1["join"]().toLocaleLowerCase;
    try { v6(); } catch (e) {}
    return "join";
}
v2.toString = f3;
const v8 = [1.0,5.0,Infinity,0.38520782411874155,2.2250738585072014e-308,0.0,510375.57751776464,-0.0,NaN,0.08566770520072464];
const o9 = {
    [v2]: v8,
};
gc();
