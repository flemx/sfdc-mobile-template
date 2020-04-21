({
    init : function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var page = cmp.get("v.page1");
        // Sets the route to /lightning/o/Account/home
        var pageReference = {
            type: 'standard__namedPage',
            attributes: {
                pageName: page
            }
        };
        cmp.set("v.pageReference", pageReference);
    },

    handleClick: function(cmp, event, helper) {
        console.log('Hanldeclick');
        var navService = cmp.find("navService");
        // Uses the pageReference definition in the init handler
        var pageReference = cmp.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    },
    handleClick2 : function(){
        console.log('handleClick2');
    }
}
)