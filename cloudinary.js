"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary_build_url_1 = require("cloudinary-build-url");
var modeTypes_1 = require("./enumConstants/modeTypes");
var resourceTypes_1 = require("./enumConstants/resourceTypes");
var CloudinaryUploader = /** @class */ (function () {
    function CloudinaryUploader() {
        this.cloudName = "";
        this.apiKey = "";
        this.apiSecret = "";
        this.secure = "";
        this.imageName = "";
        this.resource_type = "";
        this.resize = {};
        this.border = {};
        this.opacity = 0;
    }
    CloudinaryUploader.prototype.setCloudName = function (cloudName) {
        this.cloudName = cloudName;
        return this;
    };
    CloudinaryUploader.prototype.setApiKey = function (apiKeyValue) {
        this.apiKey = apiKeyValue;
        return this;
    };
    CloudinaryUploader.prototype.setApiSecret = function (apiSecretValue) {
        this.apiSecret = apiSecretValue;
        return this;
    };
    CloudinaryUploader.prototype.setSecure = function (secureValue) {
        this.secure = secureValue;
        return this;
    };
    CloudinaryUploader.prototype.setImageName = function (imageName) {
        this.imageName = imageName;
        return this;
    };
    CloudinaryUploader.prototype.setResourceType = function (resourceType) {
        this.resource_type = resourceType;
        return this;
    };
    CloudinaryUploader.prototype.setResize = function (resize) {
        this.resize = resize;
        return this;
    };
    CloudinaryUploader.prototype.setBorder = function (border) {
        this.border = border;
        return this;
    };
    CloudinaryUploader.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        return this;
    };
    CloudinaryUploader.prototype.getCloudinaryImagePath = function () {
        var imageUrl = cloudinary_build_url_1.buildUrl("https://res.cloudinary.com/" + this.cloudName + "/" + this.resource_type + "/upload/" + this.imageName, {
            cloud: {
                cloudName: this.cloudName,
            },
            transformations: {
                resize: this.resize,
                opacity: this.opacity,
            },
        });
        return imageUrl;
    };
    return CloudinaryUploader;
}());
var clGetImageUrl = new CloudinaryUploader()
    .setCloudName("dyvpwvjdn")
    .setResourceType(resourceTypes_1.resourceType.IMAGE)
    .setResize({
    width: 500,
    height: 500,
    mode: modeTypes_1.modeType.fit,
})
    .setBorder({
    width: 2,
    color: "red",
})
    .setOpacity(30)
    .setImageName("ellas_Shop_pwqai8.png")
    .getCloudinaryImagePath();
console.log(clGetImageUrl);
//retrieve image
/* axios
  .get(clGetImageUrl)
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));
 */
