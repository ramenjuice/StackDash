$('document').ready(
    function(){
        function getStackUserData(){
            var url = '/testModels/users.json';
            $.getJSON(url)
                .done(function(data){
                    var resultsHTML = '<ul class="user-list">';
                    $.each(data.items, function( i, item ) {
                        resultsHTML += '<li class="user-li'+ i +'">';
                        resultsHTML += '<a class="profile_image_link" href="'+item.link+'"><img class="profile_image img-thumbnail"';
                        resultsHTML += 'src='+item.profile_image+'></a>';
                        resultsHTML += '<div class="user_info">';
                        resultsHTML += '<a href="'+item.link+'" class="display_name">';
                        resultsHTML += item.display_name;
                        resultsHTML += '</a>';
                        resultsHTML += '<div class="accept_rate">';
                        if(!item.accept_rate){
                            item.accept_rate = "NaN";
                        }else {
                            item.accept_rate = item.accept_rate + '%';
                        }
                        resultsHTML += 'Accept Rate: ' + item.accept_rate;
                        resultsHTML += '</div>';
                        resultsHTML += '<div class="reputation">Reputation: ';
                        resultsHTML += item.reputation;
                        resultsHTML += '</div>';
                        resultsHTML += '<div class="badges">';
                        resultsHTML += '<p>';
                        resultsHTML += 'Bronze: '+item.badge_counts.bronze;
                        resultsHTML += '</p>';
                        resultsHTML += '<p>';
                        resultsHTML += 'Silver: '+item.badge_counts.silver;
                        resultsHTML += '</p>';
                        resultsHTML += '<p>';
                        resultsHTML += 'Gold: '+item.badge_counts.gold;
                        resultsHTML += '</p>';
                        resultsHTML += '</div>';
                        resultsHTML += '</div>';
                        resultsHTML += '</li>';
                    });
                    resultsHTML += '</ul>';
                    $('#stackusers').append(resultsHTML);
                })
                .fail(function(jqxhr, text, error){
                    console.log(error);
                }
            );
        }
        function getStackQuestionData(){
            var url = '/testModels/questions.json';
            $.getJSON(url)
                .done(function(data){
                    var resultsHTML = '<ul>';
                    $.each(data.items, function( i, item ) {
                        resultsHTML += '<li><a href="'+item.link+'">';
                        resultsHTML += item.title;
                        resultsHTML += '</a>';
                        resultsHTML += '<p>Answers Given: ';
                        resultsHTML += '<span class="';
                        if(item.answer_count ===0){
                            resultsHTML += 'answers_count_color';
                        }
                        resultsHTML += '">';
                        resultsHTML += item.answer_count;
                        resultsHTML += '</span></p>';
                        resultsHTML += '<ul class="tag-bar">';
                        $.each(item.tags, function(ind, tag){
                            resultsHTML += '<a class="tag" href="http://stackoverflow.com/questions/tagged/'+tag+'">';
                            resultsHTML += tag;
                            resultsHTML += '</a>';
                        });
                        resultsHTML += '</ul>';
                        resultsHTML += '</li>';
                    });
                    resultsHTML += '</ul>';
                    $('#stackquestions').append(resultsHTML);
                    $('[data-toggle="tooltip"]').tooltip();
                    $('[data-toggle="popover"]').popover();
                })
                .fail(function(jqxhr, text, error){
                    console.log(error);
                }
            );
        }
        // getStackQuestionData();
        // getStackUserData();
    }
);
