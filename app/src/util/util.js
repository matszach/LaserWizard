const Util = {

    get2Darray(sizeX, sizeY, defaultValue){
        a = new Array(sizeX);
        for(var x = 0; x < sizeX; x++){
            var row = new Array(sizeY);
            if(!(defaultValue == undefined)){
                for(var y = 0; y < sizeY; y++){
                    row[y] = defaultValue;
                }
            }
            a[x] = row;
        }
        return a;
    },

    randInt(min, max){
        return Math.floor(min + (max - min) * Math.random()); 
    },

    randFloat(min, max){
        return min + (max - min) * Math.random(); 
    }


}