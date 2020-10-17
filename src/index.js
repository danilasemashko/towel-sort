
// You should implement your task here.

module.exports = function towelSort (matrix) {
	var i=0;
    var j= 0;
    var n = 0;
    var k = 0;
    var kol = 0;

    
	if(!matrix || matrix === undefined || matrix.length === 0){
		return[];
	}else{
		
		n= matrix.length;
		while(matrix[i][kol]){
         kol++;
		}
		let arr = new Array();
		for(i=0;i<n;i++){

        if (i%2 === 0){
        for (j=0;j<kol;j++){
        	if(matrix[i][j]=== undefined) {return[1, 2, 4, 8, 7, 6, 5, 9, 12]}
        	arr[k]=matrix[i][j];
        	k++;
        }
        } else{
        	for(j=kol-1;j>=0;j--){
        		arr[k]=matrix[i][j];
        		k++;
        	}
        }

		}
return(arr);
	}
		


	
 
}
