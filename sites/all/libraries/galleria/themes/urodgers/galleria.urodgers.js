Galleria.addTheme({
    name: 'urodgers',
    author: 'Paul Wilkin, http://www.fitsolve.co.uk',
    version: 1,
    css: 'galleria.urodgers.css',
    defaults: {
        // add your own default options here
        // custom theme-specific options should begin with underscore:
        _my_color: 'black'
    },
    init: function(options) {
        /*
        The init function gets called when galleria is ready.
        You have access to all public methods and events in here
        this = gallery instance
        options = gallery options (including custom options)
        */
        // set the container's background to the theme-specific _my_color option:
        this.$('container').css('background-color', options._my_color);
        this.addElement('popout').appendChild('container','popout');
        var popout = this.$('popout');
        var gallery = this;
        popout.click(function(){
            gallery.openLightbox();
        });
        this.addElement('fbshare').appendChild('container', 'fbshare');
        this.addElement('fbbox').appendChild('container' , 'fbbox');
        var html = '<fb:like href="http://www.ursularodgers.co.uk" send="true" width="450" show_faces="true" colorscheme="dark"></fb:like>';
        this.$('fbbox').html(html);
        this.$('fbshare').click(function(){
           FB.XFBML.parse();
           gallery.$('fbbox').toggle('slow');
        });
        // bind a loader animation:
        this.bind('loadstart', function(e) {
            if (!e.cached) {
                this.$('loader').show();
            }
        });
        this.bind('loadfinish', function(e) {
            this.$('loader').hide();
        });
      
    }
});

