# remove comment in js file from IRFuzz


import os
import tqdm


corpus = "./ir_corpus"
outdir = "./processed_corpus"
os.system(f"rm -rf ./{outdir}")
os.mkdir(f"./{outdir}")

for root, dirs, files in os.walk(corpus):
    total = len(files)
    #pbar = tqdm.tqdm(range(total))
    for file in files:
        #pbar.update(1)
        if ".js" in file:
            file_path = os.path.join(corpus,file)
            #print(file_path)
            with open(file_path, 'r') as f:
                start_end = []
                line_num = 0
                for line in f:
                    line_num +=1
                    if '//' in line:
                        start_end.append(line_num)
                    if len(start_end)>=2:
                        break
                #print(start_end)
            w_file = open(f"./{outdir}/{file}","a")
            with open(file_path, 'r') as f:
                line_num = 0
                for line in f:
                    line_num +=1
                    if line_num>start_end[0] and line_num<start_end[1]:
                        w_file.write(line)