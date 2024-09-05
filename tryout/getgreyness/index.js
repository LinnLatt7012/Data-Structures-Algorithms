function getMaximumGreyness(pixels){
    maprow = [];
    mapcolumn = [];

    current =  pixels.map((row)=>row.split(''));
    for(let i=0;i<current.length;i++){
        for(let j=0;j<current[i].length;j++){
            if(!maprow[i]){
                maprow[i]=[0,0]
            }
            if(!mapcolumn[j]){
                mapcolumn[j]=[0,0]
            }
            if(current[i][j]==='1'){
                maprow[i][0]++
                mapcolumn[j][0]++
            }else{
                maprow[i][1]++
                mapcolumn[j][1]++
            }
        }
    }
    maxGrey=0;
    for(let i=0;i<current.length;i++){
        for(let j=0;j<current[i].length;j++){
            noB= maprow[i][0] +mapcolumn[j][0]
            noW= maprow[i][1] + mapcolumn[j][1]
            greyness = noB - noW
            maxGrey=Math.max(maxGrey,greyness);
        }
    }
    return maxGrey;
}

pixels=["1010","0101","1010"]
pixels=["011","101","001"]


console.log(getMaximumGreyness(pixels));
