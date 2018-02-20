  //1) Crea tu propia función forEach.
  function myForEach(array, callback){
  		// completa aqui
      for (var i = 0; i < array.length; i++) {
        callback(array[i])
      }
  	}

	myForEach([1,2,3], showElement)

  //Definiendo la función que muestra cada elemento del array.
  function showElement(n) {
    console.log(n);
  }

  //2) Crea tu propia función map
  var arrayCubeElement =[];
  function myMap(array, callback){
      for (var i = 0; i < array.length; i++) {
        callback(array[i])
      }
    console.log(arrayCubeElement);//Arreglo nuevo que devuleve la función al aplicar myMap.
  	}

	myMap([1,2,3], cubeElements)

  //Definiendo la función que obtiene el cubo de cada elemento del array.
  function cubeElements(n) {
    var elementCube = 0;
    elementCube = n*n*n;
    arrayCubeElement.push(elementCube);
    //console.log(arrayCubeElement);
    return arrayCubeElement
  }


  //3) Crea tu propia función filter.
  var numFiltered = [];
  function myFilter(array, callback){
    for (var i = 0; i < array.length; i++) {
      callback(array[i])
    }
    console.log(numFiltered);//Arreglo nuevo que devuleve la función al aplicar myFilter.
  }

  myFilter([1,2,3], filterElement)

  //Definiendo la función que filta a cada elemento del array.
  function filterElement(n) {
    if (n > 1) {
      numFiltered.push(n);
    }
    //console.log('Los elementos: ' + numFiltered + ' si son mayor a 1');
    return numFiltered
  }

  //4) Crea tu propia función reduce.
  var sumElement = 0;
  function myReduce(array, callback){
      // completa aqui
      for (var i = 0; i < array.length; i++) {
        callback(array[i])
      }
      console.log(sumElement);//Suma que devuleve la función al aplicar myReduce.
    }

    myReduce([1,2,3], cubeElement)

    //Definiendo la función que obtiene el cubo de cada elemento del array.
    function cubeElement(n) {
      sumElement += n;
      return sumElement
    }
