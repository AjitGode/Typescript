enum Direction {
      North,
      East,
      South,
      West
}
console.log(Direction.North)

enum StatusCode {
      NotFound =404,
      Success = 200,
      Forbidden = 403,
      TimeOut = 503
}

if(StatusCode.NotFound){
      console.log('Code Not Found')
}
if(StatusCode.Success){
      console.log("Code Found")
}
if(StatusCode.Forbidden){
      console.log('Something went wrong')
}
if(StatusCode.TimeOut){
      console.log('Please wait for a second')
}