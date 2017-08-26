vex.defaultOptions.className = 'vex-theme-os'; // specifies the css theme

// sets a function to open the 1st window
var ffStart = function() {
    // calls the vex.dialog.open() method to display the content
    vex.dialog.open({
        message: '<div>Click Next to see the second window</div><br/>Here can be an image, table, iframe ...', // sets a primary content

        // sets custom buttons
        buttons: [
            $.extend({}, vex.dialog.buttons.YES, {
                text: 'Next'
            }), // For Yes
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Close'
            }) // For Cancel
        ],

        // ecalls a callback function when the modal window is closed
        // opens another window
        callback: function(value) {
            if (value == true) return vex_open2();
        }
    });
}

// sets a function for the 2nd modal window
var vex_open2 = function() {
    // calls the vex.open() method to display the content
    vex.open({
        content: '<div>Content-1 in "content" property</div>', // sets a primary content
        className: 'vex-theme-default', // change the css theme

        // append another content after the dialog has opened
        // passing the content2 as argument, to include it in the modal window (after the primary content)
        afterOpen: function($vexContent) {
            return $vexContent.append(content2);
        },

        // openss a Modal Alert Window after this window is closed
        afterClose: function() {
            return vex.dialog.alert('Thany You');
        }
    });
}

// HTML content appended in the 2nd modal window
var content2 = '<p>HTML content appended from separated variable.</p><br/>Here can be an image, table, iframe ...';

// registers click event to #vex_t4, to call the vex_open1() function
$('button').on('click', '#forceModal', function() {
    ffStart();
});