import { buildUrl } from "cloudinary-build-url";
import { modeType } from "./enumConstants/modeTypes";
import { resourceType } from "./enumConstants/resourceTypes";
import { Resize } from "./imageUtils/IResize";
import { Border } from "./imageUtils/IBorder";
import axios from "axios";
import { background} from "./imageUtils/transformationProps";

class CloudinaryUploader {
  private cloudName: string = "";
  private apiKey: string = "";
  private apiSecret: string = "";
  private secure: string = "";
  private imageName: string = "";
  private resource_type: string = "";
  private resize: Object = {};
  private border: Border = {};
  private opacity: number = 0;
  background: string = "";
  

  constructor() {}

  public setCloudName(cloudName: string) {
    this.cloudName = cloudName;
    return this;
  }

  public setApiKey(apiKeyValue: string) {
    this.apiKey = apiKeyValue;
    return this;
  }

  public setApiSecret(apiSecretValue: string) {
    this.apiSecret = apiSecretValue;
    return this;
  }

  public setSecure(secureValue: string) {
    this.secure = secureValue;
    return this;
  }

  public setImageName(imageName: string) {
    this.imageName = imageName;
    return this;
  }

  public setResourceType(resourceType: resourceType) {
    this.resource_type = resourceType;
    return this;
  }

  public setResize(resize: Resize) {
    this.resize = resize;
    return this;
  }

  public setBorder(border: Border) {
    this.border = border;
    return this;
  }

  public setBackground(background: background){
    this.background = background;
    return this;
  }

  public setOpacity(opacity: number) {
    this.opacity = opacity;
    return this;
  }
 

  public getCloudinaryImage() {
    const imageUrl = buildUrl(
      `https://res.cloudinary.com/${this.cloudName}/${this.resource_type}/upload/${this.imageName}`,
      {
        cloud: {
          cloudName: this.cloudName,
        },
        transformations: {
          background: this.background,
          resize: this.resize,
          opacity: this.opacity,
        },
      }
    );
    return imageUrl;
  }
}

let clGetImageUrl = new CloudinaryUploader()
  .setCloudName("<your cloud name here>")  
  .setResourceType(resourceType.IMAGE)
  .setResize({
    width: 500,
    height: 500,
    mode: modeType.fit,
  })
  .setBorder({
    width: 2,
    color: "red",
  })
  .setOpacity(30)
  .setImageName("<your image name as is on cloudinary>") 
  .getCloudinaryImage();

console.log(clGetImageUrl);

//retrieve image
/* axios
  .get(clGetImageUrl)
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));
 */
