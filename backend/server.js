const http=require("http");
const app=require("./app");
const server=http.createServer(app);
const port=process.env.PORT||4000;


server.listen(port,()=>{
    console.log(`App Listen on Post ${port}`);
});