/**
 * Module which connects  with the service
 */
var dataServerModule = (function ($) {

    /**
     * Getting data from the service
     * @returns {*}
     */
    var asyncData= function(){

        //Deferred  defined
        var dfd= new $.Deferred()
        $.ajax({
            url: 'http://api.citybik.es/v2/networks',
            async: true,
            type: "GET",
            // Throw resolve when ajax call is done
            success: dfd.resolve
        });
        // Return promise
        return   dfd.promise();

    };

    // Public methods
    return {
        getAsyncData: asyncData
    };

})(jQuery);