const v1 = [1024,1024,1024,1024,1024];
function f2() {
    return 1024;
}
Object.defineProperty(v1, 19, { enumerable: true, get: f2 });
const o3 = {
};
o3.set = f2;
const v5 = new Proxy(v1, o3);
try { v5.fill(); } catch (e) {}
gc();
