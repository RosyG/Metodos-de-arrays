  //1) Crea tu propia función forEach.
  function myForEach(array, callback){
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

    /*BONUS:*/
    //1) Crea tu propia función sort.
    var aux = 0;
    function mySort(array, callback){
        // completa aqui
        for (var i = 0; i < array.length; i++) {
          //El arreglo no incrementa porque al hacer un splice en la línea 89, el siguiente elemento a comparar es 0, ya que el anterior fue borrado.
          for (var j = 1; j < array.length; j++) {
             console.log(array[i]);
             console.log(array[j]);

            callback(i, j ,array[i],array[j],array)//Pasando como parametro el 1er elemento para comparar con el resto de los elementos del array.
          }
          //array.splice(i, 1)//Borrando al elemento que ya se comparo con el resto del arreglo para que no ocurran repeticiones en las comparaciones.
        }

      }

      mySort([1, 2,3], toHighestToLowest)

      //Definiendo la función que obtiene el cubo de cada elemento del array.
      function toHighestToLowest(i, j, pre, post,newArray) {
        console.log(i);
        console.log(j);
        if (pre > post) {
          aux = pre;
          console.log('MAYOR' + aux);
          newArray[i] = aux;//Elemento que es mayor, se añade en la posición actual de la iteración.
          var newPost = newArray.shift();//Elemento que será movido a la siguiente posición.
          newArray[j] = newPost;
          console.log(newArray);
        }
        // arrayHighestToLowest.push();
        // return arrayHighestToLowest
      }
