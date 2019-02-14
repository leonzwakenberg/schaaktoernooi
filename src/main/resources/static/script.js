        $(document).on('click','#schakeroverzichtbutton', function(){
            $.ajax({
                type: "get",
                url: "/schaker",
                success: function(result){
                    returnfunction(result);
                }
            });
        });

        function returnfunction(antwoordserver){
        console.log(antwoordserver);
            var ant = "<table border=1>";
            for(var q = 0 ; q < antwoordserver.length; q++){
                ant += "<tr><td>"+antwoordserver[q].voornaam+"</td></tr>";
                ant += "<tr><td>"+antwoordserver[q].tussenvoegsel+"</td></tr>";
                ant += "<tr><td>"+antwoordserver[q].achternaam+"</td></tr>";
                ant += "<tr><td>"+antwoordserver[q].geboortedatum+"</td></tr>";
                ant += "<tr><td>"+antwoordserver[q].gewonnenpartijen+"</td></tr>";
                ant += "<tr><td>"+antwoordserver[q].remises+"</td></tr>";
                ant += "<tr><td>"+antwoordserver[q].verlorenpartijen+"</td></tr>";

                //ant += antwoordserver[q].voornaam + " -  - " + antwoordserver[q].achternaam + "<br>";

            }
            ant += "</table>";
            console.log(ant);
            $('#voornaamschaker').html(ant);
            $('#tussenvoegselschaker').html(ant);
            $('#achternaamschaker').html(ant);
            $('#geboortedatumschaker').html(ant);
            $('#gewonnenpartijenschaker').html(ant);
            $('#remisesschaker').html(ant);
            $('#verlorenpartijenschaker').html(ant);
        }


