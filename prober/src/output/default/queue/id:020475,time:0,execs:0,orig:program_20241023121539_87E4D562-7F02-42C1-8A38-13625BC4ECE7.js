const v1 = new Float64Array(Float64Array);
const v2 = [0.8758053986184103,3.6334489287427374,0.41015735850419255,9.593714572265707,-9.868806213942043e+307,-173537.6416022951];
const o3 = {
    "has": v1,
};
const v5 = new Proxy(v2, o3);
try { Reflect.defineProperty(o3, Reflect, v5); } catch (e) {}
gc();
