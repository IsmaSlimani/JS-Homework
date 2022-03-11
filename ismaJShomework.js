var arr = [-3,8,7,6,5,-4,3,2,1];
var min;
for(var i=0;i<arr.length;i++)
{
    min = i;
    for (var j=i+1;j < arr.length;j++)
    {
      if (arr[j] < arr[min]) { min = j; }
    }

    if (min !== i) 
    { [ arr[i], arr[min] ] = [ arr[min], arr[i] ]; }
  }
console.log(arr);