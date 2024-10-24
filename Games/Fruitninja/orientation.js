function _orientationFixForIOS() {
    try {
        window.console.log = () => {};
        const _azResizehandler = () => {
            const isiPhone = (window.navigator.userAgent.indexOf('iPhone') !== -1);
            const isiPad = ((window.navigator.userAgent.indexOf('Macintosh') !== -1) || (window.navigator.userAgent.indexOf('iPad') !== -1)) && (navigator.maxTouchPoints > 1);
            const versionMatch = window.navigator.userAgent.match(/Version\/(\d+(\.\d+)?)/);
            let versionNumber = versionMatch ? parseFloat(versionMatch[1]) : null; ///todo debug
            versionNumber = 17;// todo undo, debug
            const isAnIOSMobileDevice = isiPhone || isiPad;

            if(isAnIOSMobileDevice && (versionNumber && versionNumber >= 17)) {
                    //from the game engine
             /*       var locCanvas = cc.game.canvas;

                    if (locCanvas) {
                        var windowSize = cc.screen.windowSize;
                        locCanvas.width = windowSize.width;
                        locCanvas.height = windowSize.height;
                    }*/
                    //this is the one I was using
               /*     document.getElementById('GameDiv').style.width = `${window.innerWidth}px`;
                    document.getElementById('GameDiv').style.height = `${window.innerHeight}px`;*/



                    let debug = document.getElementById('azerion-resize-check-game');
                    debug.innerHTML = `if`;

            } else {
                document.getElementById('azerion-resize-check-game').innerHTML = 'else';
            }
        }

        function _azDebounce(func, delay) {
            let timeoutId;

            return function (...args) {
                clearTimeout(timeoutId);

                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        }

        const _deboucedResizeHanlder = _azDebounce(_azResizehandler, 500);

        // window.addEventListener('resize', _deboucedResizeHanlder);
        // window.addEventListener('orientationchange', _deboucedResizeHanlder);

    } catch(e){
        document.getElementById('azerion-resize-check-game').innerHTML = 'e';
        console.log('Could not detect orientation change');
    }


}

_orientationFixForIOS();
