const v1 = [-4,-4];
v1[3] = v1;
JSON["stringify"](v1.toLocaleString());
gc();
