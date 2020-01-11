setInterval(function() {
    if(window.location.pathname.indexOf("/status/") > -1) {
        var showMoreReplies = $("span:contains('Show more replies')");
        if(showMoreReplies.length) {
            showMoreReplies.click();
        }
        
        var showOffensiveReplies = $("div:contains('Show additional replies, including those that may contain offensive content')");
        if(showOffensiveReplies.length){
            showOffensiveReplies = showOffensiveReplies.last();
            var btn = showOffensiveReplies.parent().find("span:contains('Show')").last();
            btn.click();
        }
    }
}, 2000);