console.log("test");

  //I will make an array with a list of different car companies

    var carsArray = ["Ford","Volkswagen","Mercedes","Hyundai"];
  //This variable will find the first item in my carsArray

    var firstCar = carsArray[0];
    console.log(firstCar);

  //I will make an if... else... conditional that will
  //test to see whether the first item in my carsArray is Hondo
  //We will also test whether the third car is a Mercedes
    if (firstCar == "Honda")
    {
    console.log("The first car in the array is Honda");
    }
    else if (carsArray[2]== "Mercedes")
    {
      console.log("The third car is a Mercedes.");
    }

  else
    {
      console.log("The first car in the array is not a Honda");
      console.log("Actually, the first car is " +firstCar);
    }
