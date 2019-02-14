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
               ant += "<tr><td>"+antwoordserver[q].voornaam+"</td>";
               ant += "<td>"+antwoordserver[q].tussenvoegsel+"</td>";
               ant += "<td>"+antwoordserver[q].achternaam+"</td>";
               ant += "<td>"+antwoordserver[q].geboortedatum+"</td>";
               ant += "<td>"+antwoordserver[q].gewonnenPartijen+"</td>";
               ant += "<td>"+antwoordserver[q].remises+"</td>";
               ant += "<tr><td>"+antwoordserver[q].verlorenPartijen+"</td></tr>";

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

function toevoegenSchaker(){
        alert("Toevoegen Schaker!");
        var dto = {};
        dto.voornaam = $('#verstuurbutton').val();
        dto = JSON.stringify(dto);
        $.ajax({
                type: "POST",
                url: "/schaker/add",
                data: dto,
                contentType : "application/json",
                success: function(result){
                }
        });




        }


