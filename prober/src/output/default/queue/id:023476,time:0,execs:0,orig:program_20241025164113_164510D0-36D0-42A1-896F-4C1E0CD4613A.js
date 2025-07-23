const v2 = new Proxy(Reflect, Reflect);
Object.defineProperty(v2, "m", { value: v2 });
gc();
