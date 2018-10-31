function test () {
  
  // what happens if i try to use drive without declaring it
  //var folder = cGoingGas.DriveUtils.getFolderFromPath ('/Published Scripts');
  
  // need to define it
  // DriveApp.getFileById(id)
  cGoingGas.Services.setClass (DriveApp, 'DriveApp');
  var folder = cGoingGas.DriveUtils.getFolderFromPath ('/Published Scripts');
}
