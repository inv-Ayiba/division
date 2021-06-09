import random
def gridgen(num):
    rack=[];
    for i in range(num):
        rack.append([])
        for j in range(num):
            rack[i].append(int(str(i)+str(j)))
    return rack
# print(gridgen(10))
def add(arr1,arr2):
    return [arr1[0]+arr2[0],arr1[1]+arr2[1]]
def start(numset,step,length):
    north=[0,-1]
    south=[0,1]
    west=[-1,0]
    east=[1,0]
    cords=[[0,-1],[0,1],[-1,0],[1,0]]
    cords1=[[0,-1],[0,1]]
    cords2=[[-1,0],[1,0]]
    take=[]
    for i in range(1,length+1):
        dd=(random.randint(0,3))
        dd2=(random.randint(0,1))
        if (i==0):
            numset=add(numset,cords[dd])
        else:
            if(dd==0 or dd==1):
               numset= add(numset,cords2[dd2])
            else:
               numset= add(numset,cords1[dd2])
        take.append(numset)
    return take


def resol(num):
    rec=[]
    recno=0
    for i in range(num):
        try:
            target=[45, 50]
            #start dey here
            fuunc= start(target,3,4)
            rec.append(fuunc.index(target))
            recno+=1
        except ValueError:
            rec.append("oops")
    return [recno/num]

print(resol(32))