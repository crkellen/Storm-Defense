/*!
 * assetLoader.js
 * author: Brent M. Dingle
 * last modified: 2015
 * Modified further by Lutz Kellen - 2015
 * Example javascript asset manager example --- still in development (alpha version)
 *
 *         ONLY use for IMAGES!
 *
 */

function AssetManager() {
    this.successCount = 0;
    this.errorCount = 0;
    this.cache = {};          // set up for key-->value concept (object-literals)
    this.isUnloaded = {};
    this.downloadQueue = [];  // set up as normal array, not object literals
    
    this.reloadSuccessCount = 0;
    this.reloadErrorCount   = 0;
};

// -----------------------------------------------------------------
AssetManager.prototype.queueDownload = function(path) {
    this.downloadQueue.push(path);
};

// -----------------------------------------------------------------
// Call this after queuing all assets
// Note: downloadCallback is the function that will be run
//       when all asset downloads have been 'completed'
// Important: 
// when calling downloadAll 
// do NOT put parens on callback function parameter
// i.e. do NOT say: am.downloadAll( callme() )
//     instead say: am.downloadAll( callme )
// -----------------------------------------------------------------
AssetManager.prototype.downloadAll = function(downloadCallback) {
    for (var i = 0; i < this.downloadQueue.length; i++) {
        var path = this.downloadQueue[i];
        this.cache[path] = new Image();
        
        var that = this; // crazy trick to get 'this' to work 
                         // correctly in below callbacks
        
        this.cache[path].addEventListener("load", function() 
                                        {
                                            that.successCount += 1;
                                            //console.log("DEBUG: successes =" + that.successCount);
                                            if (that.isDone() ) 
                                            {
                                                downloadCallback();
                                            }
                                        }, false);

        this.cache[path].addEventListener("error", function() 
                                        {
                                            that.errorCount += 1;
                                            //console.log("DEBUG: errors =" + that.errorCount);
                                            if (that.isDone() ) 
                                            {
                                                downloadCallback();
                                            }
                                        }, false);
        
        this.cache[path].src = path;
        //this.cache[path] = img; // think: "path is the key, img is the value"
                                  // What this does is add the entry below to this.cache
                                  // this.cache = { path : img }
        this.isUnloaded[path] = 0;
    }

    if (this.downloadQueue.length === 0) 
    {
        downloadCallback();
    }    
};

// -----------------------------------------------------------------
AssetManager.prototype.isDone = function() {
    return (this.downloadQueue.length == this.successCount + this.errorCount);
};

// ----------------------------------------------------------------------------
// Use this for asset retrieval based on path
// ----------------------------------------------------------------------------
AssetManager.prototype.getAsset = function(path) {
    if (this.isUnloaded[path] == 0) {
        return this.cache[path];    // path is the key, img is the value
    } else {
		alert(this.isUnloaded[path]);
        return null;   // TODO: this needs more testing
    }
};

// ----------------------------------------------------------------------------
// TODO: this function is untested
// ----------------------------------------------------------------------------
AssetManager.prototype.unloadAsset = function(path) {
    var img = getAsset(path);
    if (img != null) {
        img.src = "";  // TODO, some say this must be a 1 pixel image ref to really work
        this.isUnloaded[path] = 1;  // 1 for true
    }
};

// ----------------------------------------------------------------------------
// TODO: this function is untested
// Asset may not be immediately available for use (must be re-downloaded)
//    TODO: may want to allow callback function to be sent a param to this function
// ----------------------------------------------------------------------------
AssetManager.prototype.reloadAsset = function(path) {
    if (this.isUnloaded[path] == 1)
    {
        var img = this.cache[path];  // thus no reallocating memory
        var that = this; // crazy trick to get 'this' to work 
                         // correctly in below callbacks
        
        img.addEventListener("load", function() 
                                        {
                                            that.reloadSuccessCount += 1;
                                            //console.log("DEBUG: reload successes =" + that.reloadSuccessCount);
                                        }, false);

        img.addEventListener("error", function() 
                                        {
                                            that.reloadErrorCount += 1;
                                            //console.log("DEBUG: reload errors =" + that.reloadErrorCount);
                                        }, false);
        img.src = path;              // force reload
        this.isUnloaded[path] = 0;   // flag as no longer UNloaded
    }
    // else was never unloaded and nothing to do
    // --- TODO may want to increment reloadSuccess anyway
};
