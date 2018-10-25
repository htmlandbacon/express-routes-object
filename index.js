module.exports = (router) => {
    const routes = [];
    
    router.stack.forEach((middleware) => {
        if(middleware.route && middleware.route.path != "/routes"){ 
            routes.push(middleware.route);
        } 
    });
    return routes;
};