const v2 = createGlobalObject().Float16Array;
Reflect.construct(v2, [v2,v2,v2], Float64Array).slice(Float64Array);
gc();
