const CanvasManager = {

    canvas: null,
    context: null,
    cnvWidth: 0,
    cnvHeight: 0,

    init(){
        this.canvas = document.getElementById('gameplay-canvas');
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
        this.refitCanvas();
        $(window).resize(this.refitCanvas);
    },

    refitCanvas(){
        CanvasManager.canvas.width = window.innerWidth;
        CanvasManager.cnvWidth = window.innerWidth;
        CanvasManager.canvas.height = window.innerHeight;
        CanvasManager.cnvHeight = window.innerHeight;
    },

    /**
     * @param {Image} image - Image object reference from ImageLoader
     * @param {number} tileX - x position of a selected image in it's tileset file
     * @param {number} tileY - y position of a selected image in it's tileset file
     * @param {number} unitSize  - display unit size, based on window scale
     * @param {number} inCanvasX - desired x position of the to-be-drawn image in the canvas (in units)
     * @param {number} inCanvasY - desired y position of the to-be-drawn image in the canvas (in units)
     * @param {number} offsetX - x offset of the image drawn (in pixels)
     * @param {number} offsetY - y offset of the image drawn (in pixels)
     * @param {number} scale - size of the drawn image (in units) *optional
     * @param {number} alpha - alpha of the drawn image
     * @param {number} tileSize - size of a tile in the tileset image (in pixels) *optional
     * @param {number} borderSize - size of the border in the tileset image (in pixels) *optional
     */
    paintImageAt(image, tileX, tileY, unitSize, 
            inCanvasX, inCanvasY, offsetX, offsetY, 
            scale, alpha, tileSize, borderSize){

        // optional values
        var scale = scale ? scale : 1.0; 
        var tileSize = tileSize ? tileSize : 64;
        var borderSize = borderSize ? borderSize : 4;
        var alpha = alpha ? alpha : 1.0;

        // drawing parametres calculation
        var cropX = tileX * (tileSize + borderSize) + 0.5;
        var cropY = tileY * (tileSize + borderSize) + 0.5;
        var cropSize = tileSize - 1;
        
        var drawOffset = unitSize * (scale - 1)/2;
        var drawX = (inCanvasX - 0.5) * unitSize - drawOffset + offsetX;
        var drawY = (inCanvasY - 0.5) * unitSize - drawOffset + offsetY;
        var drawSize = unitSize * scale;

        this.context.globalAlpha = alpha;

        // drawing proper
        this.context.drawImage(image, 
            cropX, cropY, cropSize, cropSize, 
            drawX, drawY, drawSize, drawSize);

        this.context.globalAlpha = 1.0;

    },

    /**
     * @param @see this.paintImageAt()
     * @param {*} degrees 
     */
    paintRotatedImageAt(image, tileX, tileY, unitSize, 
        inCanvasX, inCanvasY, offsetX, offsetY, degrees,
        scale, alpha, tileSize, borderSize){  

        // optional values
        var scale = scale ? scale : 1.0; 
        var tileSize = tileSize ? tileSize : 64;
        var borderSize = borderSize ? borderSize : 4;
        var alpha = alpha ? alpha : 1.0;

        // drawing parametres calculation
        var cropX = tileX * (tileSize + borderSize) + 0.5;
        var cropY = tileY * (tileSize + borderSize) + 0.5;
        var cropSize = tileSize - 1;
        
        var drawX = inCanvasX * unitSize + offsetX;
        var drawY = inCanvasY * unitSize + offsetY;
        var drawSize = unitSize * scale;

        this.context.save();
        this.context.globalAlpha = alpha;
        this.context.translate(drawX, drawY); // !!! first translate, then rotate
        this.context.rotate(degrees * Math.PI/180);

        // drawing proper
        this.context.drawImage(image, 
            cropX, cropY, cropSize, cropSize, 
            -drawSize/2, -drawSize/2, drawSize, drawSize);

        this.context.globalAlpha = 1.0;
        this.context.restore();
    },

}