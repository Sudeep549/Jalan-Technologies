function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
    
        
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
        
    return arr;
 }

    var a = [2, 1, 5, 3, 11, 7]
    var temp = shuffle(a)

    console.log(temp);
