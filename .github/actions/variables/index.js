const core =  require("@actions/core");
const github =  require("@actions/github");

try{
   const time = new Date();
   core.setOutput("time",time.toTimeString());

   const variables = {
      "BUILDID" : "WUGLibs",
      "PRODUCTVERSION": "66.0.0",
      "CODELINE":"Main"
   }
   core.setOutput("variables",variables);
   
   console.log(JSON.stringify(github,null,"\t"));
}catch(error){
    core.setFailed(error.message)
}