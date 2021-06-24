"use strict";
// Custom Event Polyfill for IE 9+
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();

!function (jQuery) {

    if (window.EpBar) {
        return;
    }

    var Cookie = {
        get: function (name) {
            var cookies = document.cookie.split(';');
            name += "=";
            for (var i=0, n=cookies.length; i < n; i++) {
                var c = cookies[i];
                while (' ' === c.charAt(0)) {
                    c = c.substring(1);
                }
                if (0 === c.indexOf(name)) {
                    return unescape(c.substring(name.length));
                }
            }
            return null;
        },
        set: function (name, value, days, path, domain, secure) {
            var expires;
            if ('number' === typeof days) {
                var date = new Date();
                date.setTime( date.getTime() + (days*24*60*60*1000) );
                expires = date.toGMTString();
            }
            document.cookie = name + "=" + escape(value) +
                    ((expires) ? "; expires=" + expires : "") +
                    ((path) ? "; path=" + path : "") +
                    ((domain) ? "; domain=" + domain : "") +
                    ((secure) ? "; secure" : "");
        },
        unset: function (name) {
            this.set(name, '', 0);
        }
    };

    var EpBar = {
        uniqueId: false,
        isAuthenticated: false,
        userName: "",
        displayName: "",
        emId: "",
        avatar: "",
        link: "",
        cookieContent: Cookie.get("communaute") || Cookie.get("communaute_remember") || '',
        securityToken: "",
        premium: false,
        isJournalist: false,
        isAboPaywall: false,
        isAboPrint: false,
        isAboMobile: false,
        linkEditionNumerique: "",
        following: [],
        follower: [],
        clubs: [],
        url: "https\u003A\/\/moncompte.lexpress.fr",
        url_legacy: "https:\/\/communaute.lexpress.fr",
        urlPrefix: "https\u003A\/\/moncompte.lexpress.fr",
        fbPerms: {scope: "email,user_likes,publish_actions,user_birthday,user_location", return_scopes: true},
        fbStatus: null,
        fbActivity: false,
        fbActivityUrl: "\/facebook\/switch-partage",
        fbAppId: '111055588938671',
        wrapper: null, // jQuery DOM element of the bar
        idAbonne: '',
        type_abonnement: '',

        init: function () {
            jQuery(document).ready(function () {
                jQuery(window).trigger('epinit');
                window.dispatchEvent(new CustomEvent('epinit'));
                EpBar.addClassesToHtmlTag();
                EpBar.render();
            });
        },

        addClassesToHtmlTag: function() {
            if( EpBar.premium ) {
                document.querySelector('html').classList.add('is-premium');
            }
        },

        getCommentUrl: function (cache) {
            return '';
        },

        getCommentUrl2: function (cache) {
            return '';
        },

        loadScript: function(url, handler) {
            document.write('<script src="' + url + '"></' + 'script>');

            if ( typeof handler === 'function' ) {
                handler();
            }
        },

        load: function () {
            if (this.cookieContent) {

                this.loadScript("https://moncompte.lexpress.fr/user-bar-info.js" + '?no_cache=' + this.cookieContent, EpBar.init)

                return;
            }

            EpBar.init();
        },

        render: function () {
            this.wrapper = jQuery('#header_account_not_connected');

            if (this.isAuthenticated) {
                var wrapperConnected = jQuery('.account_manager');

                wrapperConnected.find('.avatar img').attr('src', this.avatar);
                wrapperConnected.find('.pseudo').text(this.displayName);

                if (this.isAboPaywall) {
                    wrapperConnected.find('#header_account_abo_paywall').removeClass('hide');
                }

                if (this.premium) {
                    wrapperConnected.find('#header_account_edition_numerique').removeClass('hide');
                    wrapperConnected.find('#header_account_edition_numerique a').attr("href", this.linkEditionNumerique);
                    wrapperConnected.find('#header_account_abo_paywall_and_print').removeClass('hide');
                }

                this.wrapper.addClass('hide');
                wrapperConnected.removeClass('hide');
                this.wrapper = wrapperConnected;
            }
        },

        bindEvents: function () {
            EpBar.bindFollow(window.document);
            EpBar.initProfilePopOver();
        },

        bindFollow: function (scope) {
            jQuery('a.js_follow', scope).click(function (e) {
                e.preventDefault();
                var $el = jQuery(this);
                EpBar.toggleFollow(this.getAttribute('data-username'), function (following) {
                    $el.html(following ? 'Ne plus suivre' : 'Suivre');
                });
            }).each(function (el) {
                if (EpBar.isFollowing(this.getAttribute('data-username'))) {
                    jQuery(this).html('Ne plus suivre');

                    return;
                }

                if(this.getAttribute('data-username') == EpBar.userName){
                    jQuery(this).remove();

                    return;
                }
            });
        },

        toggleFollow: function (username, callback) {
            var isFollowing = this.isFollowing(username);
            var url = this.url_legacy + '/mon-compte/suiveurs-suivis/'+(isFollowing ? 'ne-plus-suivre' : 'suivre')+'/'+username+'.jsonp';
            jQuery.ajax({
                type: 'get',
                dataType: 'jsonp',
                data: { security_token: this.securityToken },
                url: url,
                cache: false
            });
            if (isFollowing) {
                EpBar.following.splice(EpBar.following.indexOf(username), 1);
                jQuery(window).trigger('ep.member.follow', [username]);
            } else {
                EpBar.following.push(username);
                jQuery(window).trigger('ep.member.unfollow', [username]);
            }
            if (undefined !== callback) {
                callback(!isFollowing);
            }

            if (!this.isAuthenticated) {
                this.showLayerConnection();
            }
        },


        initProfilePopOver: function() {
            var timeoutOpen, timeoutClose;
            var htmlCache = [];

            var close = function() {
                clearTimeout(timeoutClose);
                $('.tip').die().remove();
            };

            var removeFollowButton = function ($popOver) {
                if (!EpBar.isAuthenticated) return;
                $popOver.find('p.button').remove();
                $popOver.find('p.following').remove();
                $popOver.find('div.tip_right').append('<p class="following">Vous suivez ' + $popOver.find('a.pseudo').attr('data-name') + '.</p>');
            };

            var show = function($popOver, element) {
                close();
                $(document.body).append($popOver);

                // Set popOver position
                var pos = element.offset();
                var elementTop = parseInt(pos.top);
                var elementLeft = parseInt(pos.left);
                var elementWidth = parseInt(element.outerWidth(false) - parseInt(element.css('paddingLeft')) - parseInt(element.css('paddingRight')));

                if (element.hasClass('tip_account_placeholder')) {
                    var parentElement = element.parents('.placeholder');
                    var parentPos = parentElement.position();

                    elementTop += parseInt(parentPos.top);
                    elementLeft += parseInt(parentPos.left) + parseInt($(parentElement.children()[0]).position().left);
                }

                var top = elementTop - (parseInt($popOver.height()) + parseInt($popOver.css('paddingTop')) + parseInt($popOver.css('paddingBottom')));
                var left = elementLeft + parseInt((elementWidth - 27) / 2);
                left = Math.max(left, 125); // .tip { margin-left: -125px }

                $popOver.css({
                    'left': left,
                    'top': top
                });

                $popOver.on('mouseenter', function() {
                    clearTimeout(timeoutClose);
                }).on('mouseleave', function() {
                    timeoutClose = setTimeout(close, 100);
                });
            };

            var display = function (element) {
                var $link = jQuery(element);
                // Parses the user profile URL to get the last 2 elements
                var id = $link.find('a').attr('href');
                if (id == undefined) {
                    id = $link.attr('href');
                }
                var splitHref = id.split('/');

                id = '/' + splitHref[splitHref.length - 2] + '/' + splitHref[splitHref.length - 1];

                if ('undefined' !== typeof htmlCache[id]) {
                    show(htmlCache[id], $link);
                    return;
                }

                jQuery.get(EpBar.urlPrefix + "/pop-over" + id, function(html) {
                    html = $(html);
                    if(EpBar.isFollowing(html.find('a.pseudo').attr('data-username'))) {
                        removeFollowButton(html);
                    }
                    else if(EpBar.userName == html.find('a.pseudo').attr('data-username')){
                        html.find('p.button').remove();
                        html.find('p.following').remove();
                    }
                    else{
                        html.find('p.button').click(function(){
                            EpBar.toggleFollow(html.find('a.pseudo').attr('data-username'));
                            removeFollowButton(html);
                            html[id] = html;
                        });
                    }
                    show(html, $link);
                    htmlCache[id] = html;
                });
            };

            // Bind events on each link
            jQuery('.tip_account').unbind().on('mouseenter', function (event) {
                clearTimeout(timeoutClose);
                timeoutOpen = setTimeout(jQuery.proxy(function() {
                    display(this);
                }, this), 500);
            }).on('mouseleave', function (event) {
                clearTimeout(timeoutOpen);
                timeoutClose = setTimeout(close, 100);
            });
        },

        onInit: function (callback) {
            jQuery(window).on('epinit', callback);
        },

        onPaginate: function (callback) {
            jQuery(window).on('paginate', callback);
        },

        onFacebookInit: function(callback) {
            jQuery(window).on('fbinit', callback);
        },

        onDisplayMore: function(callback) {
            jQuery(window).on('epdisplaymore', callback);
        }

    };

    EpBar.onInit(function () {
        EpBar.onInit = function (callback) { callback() };
    });
    EpBar.onFacebookInit(function () {
        EpBar.onFacebookInit = function (callback) { callback() };
    });
    EpBar.onDisplayMore(function () {
        EpBar.onDisplayMore = function (callback) { callback() };
    });

    EpBar.onInit(function () {
        if (document.channel) {
            Cookie.set("channel", document.channel, false, "\/", 'lexpress.fr', false);
        }
    });

    
    EpBar.load();

    // export to global scope
    window.EpBar = EpBar;
    window.Cookie = Cookie;
}(jQuery);
