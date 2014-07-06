/**
 * Main module
 */
(function($,dataServer) {

     // used then  to get the promise defined when the module dataServerModule  finished
    dataServer.getAsyncData().then(
        function (results){
            console.info(results);
            setData(results);
        }
    // It hides the message Loading
    ).then(function(){
            hideLoading();
        });

    /**
     * Setting the data
     * @param data: data from the server
     */
    var setData= function(data){

        console.info(data);
        $.each(data.networks, function(i, item) {
            //console.info(item);
            addRow(i,item)
        });
        //hideLoading();

    };

    /**
     * Hiding  the msj Loading
     */
    var hideLoading= function(){

        $("#load_id").fadeOut(700);

    }

    /**
     * Adding rows to the table
     * @param position:  row's number
     * @param item:  row's information
     */
    var addRow= function(position,item){

        $('#tab_list_id tr:last').after('<tr>' +
            '<td>' +(position+1)+'</td> ' +
            '<td>'+item.location.city+'</td> ' +
            '<td>'+item.name+'</td>' +
            '<td>'+item.location.country+'</td>' +
            '<td>'+item.company+'</td>' +
            ' </tr>'
        );

    }

})(jQuery,dataServerModule);