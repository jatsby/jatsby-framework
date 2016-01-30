// 3dtouch.js
// Apple Force Touch support for webpages
// December 3, 2015
// Derived from freinbichler/3d-touch

$(document).ready(function() {

    console.log("ForceTouch is ready!");

    $("input").focusin(function() { // Element and event to use with force touch
        //console.log("focusin");

        var element = this; // element that is affected by forceTouch
        var touch = null; // value of force level

        console.log("Force Touch being applied to: " + element);

        addForceTouchToElement(element); // add event listener to element you want to use forceTouch with

        // when forceTouch starts
        function onTouchStart(e) {
            e.preventDefault();
            checkForce(e);
        }

        // when force level changes
        function onTouchMove(e) {
            e.preventDefault();
            checkForce(e);
        }

        // when forceTouch ends
        function onTouchEnd(e) {
            e.preventDefault();
            touch = null;
        }

        // iOS force touch
        function checkForce(e) {
            touch = e.touches[0];
            setTimeout(refreshForceValue.bind(touch), 10);
        }

        // Macbook force touch
        function checkMacForce(e) {
            // max value for trackpad is 3.0 (1.0 on iOS)
            renderElement(e.webkitForce/3); // divide by 3 to standardize versus iOS force value
        }


        function refreshForceValue() {
            var touchEvent = this;
            var forceValue = 0;
            if(touchEvent) {
                forceValue = touchEvent.force || 0;
                setTimeout(refreshForceValue.bind(touch), 10);
            }else{
                forceValue = 0;
            }

						renderElement(forceValue);
				}

				function renderElement(forceValue) {
					// if element is being force-touched
					if (forceValue > 0.8) {
		        $(element).val(""); // clear form input field
					}
				}

        // adds the eventListeners for touch events
        function addForceTouchToElement(elem) {
            elem.addEventListener('touchstart', onTouchStart, false);
            elem.addEventListener('touchmove', onTouchMove, false);
            elem.addEventListener('touchend', onTouchEnd, false);
            elem.addEventListener('webkitmouseforcewillbegin', checkMacForce, false);
            elem.addEventListener('webkitmouseforcechanged', checkMacForce, false);
        }


    });

});
