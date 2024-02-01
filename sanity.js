
import sanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export default client = sanityClient({

    projectId:"j528nzyf",
    dataset:"production",
    apiVersion:"2021-10-21",
    useCdn:true,

});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) =>builder.image(source);




