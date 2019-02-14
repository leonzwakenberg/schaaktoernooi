        $(document).on('click','#schakeroverzichtbutton', function(){
            alert("Schakeroverzichtbutton");
            $.ajax({
                type: "get",
                url: "/schaker",
                success: function(result){
                    returnfunction(result);
                }
            });
        });

        function returnfunction(antwoordserver){
            $('#schakeroverzicht').html(antwoordserver.naam);
        }

